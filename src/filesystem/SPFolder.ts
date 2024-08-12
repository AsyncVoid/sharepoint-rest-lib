import {Site} from "../Site.js";
import {IFileSystemEntry} from "./IFileSystemEntry.js";
import {SPPath} from "./SPPath.js";
import {FolderResponse} from "./FolderResponse.js";
import {AbstractFolder} from "./AbstractFolder.js";

/**
 * Represents a folder in SharePoint
 * @extends SPFileSystemEntry
 * @description https://learn.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee536433(v=office.15)
 * @example
 * const folder = await site.getFolder("Shared Documents");
 * console.log(folder.name); // "Shared Documents"
 * console.log(folder.serverRelativeUrl); // "/sites/MySite/Shared Documents"
 * console.log(folder.itemCount); // 5
 */
export class SPFolder extends AbstractFolder implements IFileSystemEntry {
    private readonly _serverRelativeUrl: string;
    private readonly _exists: boolean;
    private readonly _existsAllowThrowForPolicyFailures: boolean;
    private readonly _name: string;
    private readonly _timeCreated: Date;
    private readonly _timeLastModified: Date;
    private readonly _uniqueId: string;
    private readonly _isWOPIEnabled: boolean;
    private readonly _itemCount: number;
    // private readonly progID: null;
    // readonly welcomePage: "";

    private constructor(site: Site, response: FolderResponse) {
        super(site);
        this._serverRelativeUrl = response.ServerRelativeUrl;
        this._exists = response.Exists;
        this._existsAllowThrowForPolicyFailures = response.ExistsAllowThrowForPolicyFailures;
        this._name = response.Name;
        this._timeCreated = new Date(response.TimeCreated);
        this._timeLastModified = new Date(response.TimeLastModified);
        this._uniqueId = response.UniqueId;
        this._isWOPIEnabled = response.IsWOPIEnabled;
        this._itemCount = response.ItemCount;
        // this.progID = null
        // this.welcomePage: ""
    }

    get serverRelativeUrl(): string {
        return this._serverRelativeUrl;
    }

    get isWOPIEnabled(): boolean {
        return this._isWOPIEnabled;
    }

    /**
     * Amount of sub-folders/files within this folder
     */
    get itemCount(): number {
        return this._itemCount;
    }

    public toString(): string {
        return this.serverRelativeUrl;
    }

    public toJSON() {
        return {
            serverRelativeUrl: this.serverRelativeUrl,
            exists: this.exists,
            existsAllowThrowForPolicyFailures: this.existsAllowThrowForPolicyFailures,
            name: this.name,
            timeCreated: this.timeCreated,
            timeLastModified: this.timeLastModified,
            uniqueId: this.uniqueId,
            itemCount: this.itemCount,
            isWOPIEnabled: this.isWOPIEnabled
        }
    }

    getPath(): SPPath {
        return this.site.getPath(this);
    }

    static FromResponse(site: Site, response: FolderResponse): SPFolder | undefined {
        if (!response || response["odata.null"]) return;
        return new SPFolder(site, response);
    }

    get baseUrl(): string {
        return `${this.site.baseUrl}_api/Web/GetFolderByServerRelativeUrl('${encodeURIComponent(this.serverRelativeUrl)}')/`;
    }

    get exists(): boolean {
        return this._exists;
    }

    get existsAllowThrowForPolicyFailures(): boolean {
        return this._existsAllowThrowForPolicyFailures;
    }

    get name(): string {
        return this._name;
    }

    get timeCreated(): Date {
        return this._timeCreated;
    }

    get timeLastModified(): Date {
        return this._timeLastModified;
    }

    get uniqueId(): string {
        return this._uniqueId;
    }
}