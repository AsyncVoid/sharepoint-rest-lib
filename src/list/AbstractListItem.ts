import {ListItem} from "./ListItem.js";
import {RequestSender} from "../RequestSender.js";
import {ErrorKind} from "../SPError.js";
import {FileResponse, FolderResponse, SPFile, SPFolder} from "../filesystem/index.js";
import {ExpandedUserInfoItem, UserInfoItem} from "../user/index.js";
import {List} from "./List.js";
import {ListItemWithFileOrFolder} from "./ListItemWithFileOrFolder.js";
import {ListItemWithFileOrFolderResponse} from "./ListItemWithFileOrFolderResponse.js";
import {ListItemWithAuthor} from "./ListItemWithAuthor.js";
import {ListItemWithAuthorResponse} from "./ListItemWithAuthorResponse.js";
import {ListItemResponse} from "./ListItemResponse.js";
import {AbstractList} from "./AbstractList.js";
import {ExpansionUserInfoItemKeys, UserInfoItemResponse} from "../user/UserInfoItemResponse.js";

export abstract class AbstractListItem<T extends AbstractList> extends RequestSender {
    protected readonly _list: T;

    protected constructor(list: T) {
        super();
        this._list = list;
    }

    protected dontThrowFor(): ErrorKind[] {
        return [ErrorKind.ITEM_NOT_FOUND, ErrorKind.COLUMN_NOT_FOUND];
    }

    protected getAuth(): Promise<string> {
        return this._list.getAuth();
    }

    get list(): T {
        return this._list;
    }

    async get(): Promise<ListItem<T> | undefined> {
        const data = await this.getRequest<ListItemResponse>("");
        return data && ListItem.FromResponse(this._list, data);
    }

    async getFile(): Promise<SPFile | undefined> {
        const data = await this.getRequest<FileResponse>("File");
        return data && SPFile.FromResponse(this._list.site, data);
    }

    async getFolder(): Promise<SPFolder | undefined> {
        const data = await this.getRequest<FolderResponse>("Folder");
        return data && SPFolder.FromResponse(this._list.site, data);
    }

    async getAuthor(): Promise<UserInfoItem | undefined> {
        const data = await this.getRequest<UserInfoItemResponse>("Author");
        return data && UserInfoItem.FromResponse(data);
    }

    async getEditor(): Promise<UserInfoItem | undefined> {
        const data = await this.getRequest<UserInfoItemResponse>("Editor");
        return data && UserInfoItem.FromResponse(data);
    }

    async getCheckoutUser(): Promise<UserInfoItem | undefined> {
        const data = await this.getRequest<UserInfoItemResponse>("CheckoutUser");
        return data && UserInfoItem.FromResponse(data);
    }

    async getWithFileOrFolder() : Promise<ListItemWithFileOrFolder<T> | undefined> {
        const data = await this.getRequest<ListItemWithFileOrFolderResponse>("?$expand=File,Folder");
        return data && {
            listItem: ListItem.FromResponse(this._list, data),
            file: data.File && SPFile.FromResponse(this._list.site, data.File),
            folder: data.Folder && SPFolder.FromResponse(this._list.site, data.Folder)
        };
    }

    async getWithAuthor() : Promise<ListItemWithAuthor<T> | undefined> {
        const select = ExpansionUserInfoItemKeys.map(key => `Author/${key}`).join(",") + ",*";
        const expansion = "Author";
        const data = await this.getRequest<ListItemWithAuthorResponse>(`?$expand=${expansion}&$select=${select}`);
        return data && {
            listItem: ListItem.FromResponse(this._list, data),
            author: data.Author && ExpandedUserInfoItem.FromResponse(data.Author)
        };
    }

    async getContentType() {
        return this.getRequest("ContentType");
    }

    /**
     * Returns the attachment files of this list item
     * @returns {Promise<SPFile[]>} empty array if the list does not have attachments enabled etc
     */
    async getAttachmentFiles(): Promise<SPFile[]> {
        if (this._list instanceof List && !this._list.enableAttachments) {
            return [];
        }
        const data = await this.getRequest<{value: FileResponse[]}>("AttachmentFiles");
        return data && data.value && data.value.map(file => SPFile.FromResponse(this._list.site, file)) || [];
    }

    toJSON(): object {
        return {
            // ...super.toJSON(),
            //list: this.list
        }
    }
}

const EXPANDABLE_PROPERTIES = [
    "File",
    "Folder",
    "Author",
    "Editor",
    "CheckoutUser",
    "ContentType",
    "ComplianceAsset", // ?
    "AttachmentFiles" // ?
];