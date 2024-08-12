import {ListItemResponse} from "./ListItemResponse.js";
import {UserInfoItem} from "../user/index.js";
import {SPFile, FileSystemObjectType} from "../filesystem/index.js";
import {AbstractList} from "./AbstractList.js";
import {AbstractListItem} from "./AbstractListItem.js";

export class ListItem<T extends AbstractList> extends AbstractListItem<T> {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _guid: string;
    private readonly _created: Date;
    private readonly _modified: Date;
    private readonly _authorId: number;
    private readonly _fileSystemObjectType: FileSystemObjectType;
    private readonly _serverRedirectedEmbedUri: string | null;
    private readonly _serverRedirectedEmbedUrl: string;
    private readonly _contentTypeId: string;
    private readonly _complianceAssetId: string;
    private readonly _editorId: number;
    private readonly _checkoutUserId?: number;
    private readonly _attachments: boolean;

    constructor(list: T, id: number, title: string, guid: string, created: Date, modified: Date, authorId: number, fileSystemObjectType: FileSystemObjectType, serverRedirectedEmbedUri: string | null, serverRedirectedEmbedUrl: string, contentTypeId: string, complianceAssetId: string, editorId: number, attachments: boolean, checkoutUserId?: number) {
        super(list);
        this._id = id;
        this._title = title;
        this._guid = guid;
        this._created = created;
        this._modified = modified;
        this._authorId = authorId;
        this._fileSystemObjectType = fileSystemObjectType;
        this._serverRedirectedEmbedUri = serverRedirectedEmbedUri;
        this._serverRedirectedEmbedUrl = serverRedirectedEmbedUrl;
        this._contentTypeId = contentTypeId;
        this._complianceAssetId = complianceAssetId;
        this._editorId = editorId;
        this._checkoutUserId = checkoutUserId;
        this._attachments = attachments;
    }

    get baseUrl(): string {
        return `${this._list.baseUrl}Items(${this._id})/`
    }

    static FromResponse<T extends AbstractList>(list: T, response: ListItemResponse): ListItem<T> {
        return new ListItem(
            list,
            response.Id,
            response.Title,
            response.GUID,
            new Date(response.Created),
            new Date(response.Modified),
            response.AuthorId,
            response.FileSystemObjectType,
            response.ServerRedirectedEmbedUri,
            response.ServerRedirectedEmbedUrl,
            response.ContentTypeId,
            response.ComplianceAssetId,
            response.EditorId,
            response.Attachments || false,
            response.CheckoutUserId

        );
    }

    async get(): Promise<ListItem<T>> {
        return Promise.resolve(this);
    }

    /**
     * Returns the attachment files of this list item
     * @throws {Promise<SPFile[] | undefined>} empty array if this item's "attachments" is not true
     * or the list does not have attachments enabled
     */
    async getAttachmentFiles(): Promise<SPFile[]> {
        if (!this._attachments) {
            return [];
        }
        return super.getAttachmentFiles();
    }

    async getCheckoutUser(): Promise<UserInfoItem | undefined> {
        return this._checkoutUserId && super.getCheckoutUser();
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get guid(): string {
        return this._guid;
    }

    get created(): Date {
        return this._created;
    }

    get modified(): Date {
        return this._modified;
    }

    get authorId(): number {
        return this._authorId;
    }

    get fileSystemObjectType(): FileSystemObjectType {
        return this._fileSystemObjectType;
    }

    /**
     * Returns the server redirected embed uri
     * @returns {string | null} the server redirected embed uri
     */
    get serverRedirectedEmbedUri(): string | null {
        return this._serverRedirectedEmbedUri;
    }

    /**
     * Returns the server redirected embed url
     * @returns {string} the server redirected embed url
     * @description
     * This will never be null, but it may be empty
     */
    get serverRedirectedEmbedUrl(): string {
        return this._serverRedirectedEmbedUrl;
    }

    get contentTypeId(): string {
        return this._contentTypeId;
    }

    get complianceAssetId(): string {
        return this._complianceAssetId;
    }

    get editorId(): number {
        return this._editorId;
    }

    get checkoutUserId(): number | undefined {
        return this._checkoutUserId;
    }

    get attachments(): boolean {
        return this._attachments;
    }

    toJSON(): object {
        return {
            ...super.toJSON(),
            id: this.id,
            title: this.title,
            guid: this.guid,
            created: this.created,
            modified: this.modified,
            authorId: this.authorId,
            fileSystemObjectType: FileSystemObjectType[this.fileSystemObjectType],
            serverRedirectedEmbedUri: this.serverRedirectedEmbedUri,
            serverRedirectedEmbedUrl: this.serverRedirectedEmbedUrl,
            contentTypeId: this.contentTypeId,
            complianceAssetId: this.complianceAssetId,
            editorId: this.editorId,
            checkoutUserId: this.checkoutUserId,
            attachments: this.attachments
        }
    }
}

export class PartialListItemById<T extends AbstractList> extends AbstractListItem<T> {
    private readonly _id: number;

    constructor(list: T, id: number) {
        super(list);
        this._id = id;
    }

    get baseUrl(): string {
        return `${this._list.baseUrl}Items(${this._id})/`;
    }

    get id(): number {
        return this._id;
    }

    toJSON(): object {
        return {
            ...super.toJSON(),
            id: this.id
        }
    }
}