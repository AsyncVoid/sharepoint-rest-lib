import {RequestSender} from "./RequestSender.js";
import {PartialFile, SPFile, PartialFolderById, PartialFolderByPath, SPFolder, PathLike, SPPath} from "./filesystem/index.js";
import {List, PartialListById, PartialListByTitle} from "./list/index.js";
import {ErrorKind} from "./SPError.js";
import {SiteInfo} from "./SiteInfo.js";
import {Authenticator} from "./auth/index.js";
import {ListResponse} from "./list/ListResponse.js";

/**
 * Represents a SharePoint site
 */
export class Site extends RequestSender {

    private readonly _name: string;
    private readonly _tenant: string;
    private readonly authenticator: Authenticator;

    constructor(tenant: string, name: string, auth: Authenticator) {
        super();
        this._name = name;
        this._tenant = tenant;
        this.authenticator = auth;
    }

    protected dontThrowFor(): ErrorKind[] {
        return [];
    }

    public async getAuth(): Promise<string> {
        return this.authenticator.getAccessToken();
    }

    public get baseUrl(): string {
        return `https://${this._tenant}.sharepoint.com/sites/${this._name}/`;
    }

    /**
     * Get a site instance from a {@link SiteInfo} and {@link AuthFn}
     * @param {SiteInfo} siteInfo site information
     * @param {Authenticator} auth a callback function that returns a bearer token
     * @constructor
     */
    public static FromInfo(siteInfo: SiteInfo, auth: Authenticator): Site {
        return new Site(siteInfo.tenant, siteInfo.name, auth);
    }

    public toString(): string {
        return this._name;
    }

    public toJSON() {
        return this.getInfo();
    }

    /**
     * Returns the site's name
     * @returns {string} name of the site
     */
    get name(): string {
        return this._name;
    }

    getURL() {
        return this.baseUrl;
    }

    get tenant() {
        return this._tenant;
    }

    getInfo(): SiteInfo {
        return {
            name: this._name,
            url: this.baseUrl,
            tenant: this._tenant.toString()
        }
    }

    public getPath(pathOrFolder?: PathLike): SPPath {
        const sitePath = `/sites/${this._name}`;
        return SPPath.FromPathLike(pathOrFolder, sitePath);
    }

    public getPathEncoded(pathOrFolder?: PathLike): string {
        return this.getPath(pathOrFolder).asEncoded();
    }

    /**
     * Get files inside a folder
     * @param {PathLike} [folder] The path of the folder to get the files from
     * @returns {Promise<SPFile[]>} A promise that resolves with the files inside the folder
     * @example
     * const files = await site.getFiles("/Shared Documents");
     * // Is the same as
     * const files = await site.getFiles("/sites/MySite/Shared Documents");
     * // Is the same as
     * @example
     * const folder = await site.getFolder("/Shared Documents");
     * const files = await folder.getFiles();
     * // Is the same as
     * const folder = await site.getFolder("/Shared Documents");
     * const files = await site.getFiles(folder);
     * @example
     * const files = await site.getFiles(); // Gets files from the root (site) folder
     */
    public async getFiles(folder?: PathLike): Promise<SPFile[]> {
        return await this.getPartialFolderByPath(folder).getFiles();
    }

    public async getFolders(folder?: PathLike): Promise<SPFolder[]> {
        return await this.getPartialFolderByPath(folder).getFolders();
    }

    public async getFilesAndFolders(folder?: PathLike): Promise<{files: SPFile[], folders: SPFolder[]}> {
        return await this.getPartialFolderByPath(folder).getWithFilesAndFolders();
    }

    public async createFolder(folder: PathLike): Promise<SPFolder> {
        return await this.getPartialFolderByPath(folder).create();
    }

    public async deleteFolder(folder: PathLike): Promise<void> {
        return await this.getPartialFolderByPath(folder).delete();
    }

    public async getLists(): Promise<List[]> {
        const data = await this.getRequest<{value: ListResponse[]}>("_api/Web/Lists")
        return data.value.map((listResponse) => List.FromResponse(this, listResponse));
    }

    public getPartialFileByPath(path: PathLike): PartialFile {
        return new PartialFile(this, this.getPath(path).value);
    }

    public getPartialFolderByPath(path?: PathLike): PartialFolderByPath {
        return new PartialFolderByPath(this, this.getPath(path).value);
    }

    public getPartialFolderById(id: string): PartialFolderById {
        return new PartialFolderById(this, id);
    }

    public getPartialListByTitle(title: string): PartialListByTitle {
        return new PartialListByTitle(this, title);
    }

    public getPartialListById(id: string): PartialListById {
        return new PartialListById(this, id);
    }

    public async getListByTitle(title: string): Promise<List> {
        return this.getPartialListByTitle(title).get();
    }

    public async getListById(id: string): Promise<List> {
        return this.getPartialListById(id).get();
    }

}

