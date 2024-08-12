import {Site} from "./Site.js";
import {SiteInfo, SiteInfoBuilder} from "./SiteInfo.js";
import {RequestSender} from "./RequestSender.js";
import {ErrorKind} from "./SPError.js";
import {Authenticator} from "./auth/index.js";

interface QueryResultTable {
    Rows: { Cells: { Key: string, Value: string }[] }[]
}

export class Tenant extends RequestSender {

    private readonly _name: string;
    private readonly _authenticator: Authenticator;

    constructor(name: string, auth: Authenticator) {
        super();
        this._name = name;
        this._authenticator = auth;
    }

    protected dontThrowFor(): ErrorKind[] {
        return [];
    }

    protected getAuth(): Promise<string> {
        return this._authenticator.getAccessToken();
    }

    get baseUrl(): string {
        return `https://${this._name}.sharepoint.com/_api/`;
    }

    get name(): string {
        return this._name;
    }

    /**
     * @deprecated Not recommended for use
     */
    async listSites(): Promise<SiteInfo[]> {
        const response = await this.postRequest(
            `search/postquery`,
            {
                "request": {
                    "Querytext": "contentClass:STS_Site",
                    // "TrimDuplicates": "false",
                    "SelectProperties": [
                        "Title",
                        "SPSiteUrl"
                    ],
                    "RowLimit": "100"
                }
            }
        );

        const table : QueryResultTable = response.PrimaryQueryResult.RelevantResults.Table;
        // console.log("List sites response:", JSON.stringify(table));

        const gotRowCount = response.PrimaryQueryResult.RelevantResults.RowCount;
        const totalRowCount = response.PrimaryQueryResult.RelevantResults.TotalRows;
        const remainingRowCount = totalRowCount - gotRowCount;

        const response2 = await this.postRequest(
            `search/postquery`,
            {
                "request": {
                    "Querytext": "contentClass:STS_Site",
                    // "TrimDuplicates": "false",
                    "SelectProperties": [
                        "Title",
                        "SPSiteUrl"
                    ],
                    "StartRow": `${gotRowCount}`,
                    "RowLimit": `${remainingRowCount}`
                }
            }
        );

        const table2 : QueryResultTable = response2.PrimaryQueryResult.RelevantResults.Table;
        // console.log("List sites response2:", JSON.stringify(table2));

        const rows = table.Rows.concat(table2.Rows);

        return rows.map((row) => {
            return row.Cells.reduce(
                (result, cell) => {
                    switch (cell.Key) {
                       case "Title":
                            result.name(cell.Value);
                            break;
                       //case "Path":
                       case "SPSiteUrl":
                            result.url(cell.Value);
                            break;
                        // case "IdentitySiteCollectionId":
                        // case "SiteId":
                        //     result.id(cell.Value);
                        //     break;
                    }
                    return result;
                }, new SiteInfoBuilder().tenant(this.getName())
            ).build();
        })
    }

    toString() {
        return this.name;
    }

    getName() {
        return this.name;
    }

    getSite(siteName: string): Site {
        return new Site(this.getName(), siteName, this._authenticator);
    }
}