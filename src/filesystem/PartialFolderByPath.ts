import {AbstractFolder} from "./AbstractFolder.js";
import {HasServerRelativeUrl} from "./HasServerRelativeUrl.js";
import {Site} from "../Site.js";
import {FolderResponse} from "./FolderResponse.js";
import {SPFolder} from "./SPFolder.js";

export class PartialFolderByPath extends AbstractFolder implements HasServerRelativeUrl {
    private readonly _serverRelativeUrl: string;

    constructor(site: Site, serverRelativeUrl: string) {
        super(site);
        this._serverRelativeUrl = serverRelativeUrl;
    }

    get baseUrl(): string {
        return `${this.site.baseUrl}_api/Web/GetFolderByServerRelativeUrl('${encodeURIComponent(this.serverRelativeUrl)}')/`;
    }

    public toString(): string {
        return this.serverRelativeUrl;
    }

    get serverRelativeUrl(): string {
        return this._serverRelativeUrl;
    }

    public async create(): Promise<SPFolder> {
        const {parent, name: folderName} = this.site.getPath(this).parentAndChildName();
        const response = await this.postRequest<FolderResponse>(
            `_api/Web/GetFolderByServerRelativeUrl('${parent.asEncoded()}')/Folders/Add('${encodeURIComponent(folderName)}')`
        );
        return SPFolder.FromResponse(this.site, response);
    }
}