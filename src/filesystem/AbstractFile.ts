import {SPFile} from "./SPFile.js";
import {List, ListItem} from "../list/index.js";
import {RequestSender} from "../RequestSender.js";
import {HasServerRelativeUrl} from "./HasServerRelativeUrl.js";
import {Site} from "../Site.js";
import {ErrorKind} from "../SPError.js";
import {UserInfoItem, ExpandedUserInfoItem} from "../user/index.js";
import {PathLike, SPPath} from "./SPPath.js";
import {SPMoveOperations} from "./SPMoveOperations.js";
import {CheckInType} from "./CheckInType.js";
import {FileResponse} from "./FileResponse.js";
import {FileWithAuthor} from "./FileWithAuthor.js";
import {FileWithAuthorResponse} from "./FileWithAuthorResponse.js";
import {ListItemResponse} from "../list/ListItemResponse.js";
import {ListResponse} from "../list/ListResponse.js";
import {ExpansionUserInfoItemKeys, UserInfoItemResponse} from "../user/UserInfoItemResponse.js";

export abstract class AbstractFile extends RequestSender implements HasServerRelativeUrl {
    protected readonly _site: Site;
    protected readonly _serverRelativeUrl: string;

    protected constructor(site: Site, serverRelativeUrl: string) {
        super();
        this._site = site;
        this._serverRelativeUrl = serverRelativeUrl;
    }

    dontThrowFor(): ErrorKind[] {
        return [];
    }

    getAuth(): Promise<string> {
        return this._site.getAuth();
    }

    protected get site(): Site {
        return this._site;
    }

    get serverRelativeUrl(): string {
        return this._serverRelativeUrl;
    }

    get baseUrl(): string {
        return `${this.site.baseUrl}_api/Web/GetFileByServerRelativeUrl('${encodeURIComponent(this.serverRelativeUrl)}')/`;
    }

    public toString(): string {
        return this.serverRelativeUrl;
    }

    public toJSON(): object {
        return {
            serverRelativeUrl: this.serverRelativeUrl
        }
    }

    public async get() : Promise<SPFile> {
        return SPFile.FromResponse(this._site, await this.getRequest<FileResponse>(this.baseUrl));
    }

    public async getWithAuthor() : Promise<FileWithAuthor> {
        const expansion = "Author";
        const select = ExpansionUserInfoItemKeys.map(key => `Author/${key}`).join(",") + ",*";
        const response = await this.getRequest<FileWithAuthorResponse>(`?$expand=${expansion}&$select=${select}`);
        // console.log("Response:", JSON.stringify(response, null, 4));
        return {
            file: SPFile.FromResponse(this._site, response),
            author: ExpandedUserInfoItem.FromResponse(response.Author)
        };
    }

    public async getAuthor() : Promise<UserInfoItem> {
        const response = await this.getRequest<UserInfoItemResponse>("Author");
        return UserInfoItem.FromResponse(response);
    }

    public async updateContents(contents: Blob) : Promise<SPFile> {
        const response = this.putRequest<FileResponse>("$value", contents, {
            headers: {
                "Content-Type": "application/octet-stream"
            }
        });
        return SPFile.FromResponse(this.site, await response);
    }

    public async moveTo(destination: PathLike, flags: SPMoveOperations = SPMoveOperations.Overwrite) {
        // TODO: Check the site is the same, and the response is not null/undefined
        // Can also POST to https://tenant.sharepoint.com/_api/SP.MoveCopyUtil.MoveFileByPath() with the following body:
        // {
        //     "srcUrl": "/sites/MySite/Shared Documents/My File.txt", // {"DecodedUrl": "https://tenant.sharepoint.com/sites/MySite/Shared Documents/My File.txt"}
        //     "destUrl": "/sites/MySite/Shared Documents/My New File.txt", // {"DecodedUrl": "https://tenant.sharepoint.com/sites/MySite/Shared Documents/My New File.txt"}
        //     "flags": 1,  //?
        //     "checkRequiredFields": true // ?
        // }
        const response = await this.postRequest<FileResponse>(
            `MoveTo(newurl='${this.site.getPathEncoded(destination)}',flags=${flags})`
        );
        return SPFile.FromResponse(this.site, response);
    }

    public async copyTo(destination: PathLike, overwrite: boolean = false) {
        const response = await this.postRequest<FileResponse>(
            `CopyTo(strnewurl='${this.site.getPathEncoded(destination)}',boverwrite=${overwrite})`
        );
        return SPFile.FromResponse(this.site, response);
    }

    public async delete() : Promise<void> {
        await this.postRequest("DeleteObject()");
    }

    public async recycle() : Promise<void> {
        await this.postRequest("Recycle()");
    }

    /**
     * Download the file
     * @returns {Promise<Blob>} A promise that resolves to the file contents
     */
    public async download(): Promise<Blob> {
        return await this.getRequest<Blob>(
            "$value",
            {
                responseType: "blob"
            }
        );
    }

    /**
     * Checks out the file
     * @returns {Promise<void>} A promise that resolves when the file has been checked out
     */
    public async checkOut() : Promise<void> {
        await this.postRequest("CheckOut()");
    }

    public async undoCheckOut() {
        await this.postRequest("UndoCheckOut()");
    }

    /**
     * Checks in the file
     * @param {string} comment The comment to add to the check in
     * @param {CheckInType} checkinType The type of check in to perform
     */
    public async checkIn(comment: string, checkinType: CheckInType) : Promise<void> {
        await this.postRequest(`CheckIn(comment='${encodeURIComponent(comment)}',checkintype=${checkinType})`);
    }

    public async upload(contents: Blob, overwrite: boolean = false) : Promise<SPFile> {
        const {parent, name: fileName} = this.getPath().parentAndChildName();
        const response = await this.postRequest(
            `_api/Web/GetFolderByServerRelativeUrl('${parent.asEncoded()}')/Files/Add(url='${encodeURIComponent(fileName)}',overwrite=${overwrite})`,
            contents,
            {
                headers: {
                    "Content-Type": "application/octet-stream"
                }
            }
        );
        return SPFile.FromResponse(this.site, response.data);
    }

    public async getListItem(): Promise<ListItem<List>> {
        const response = await this.getRequest< ListItemResponse & {ParentList: ListResponse}>(
            `ListItemAllFields?$expand=ParentList`
        );
        return ListItem.FromResponse(List.FromResponse(this.site, response.ParentList), response);
    }

    public getPath(): SPPath {
        return SPPath.FromFileSystemObject(this);
    }
}
