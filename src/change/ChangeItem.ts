import {ChangeType} from "./ChangeType.js";
import {ChangeToken} from "./ChangeToken.js";
import {PartialListItemById, ListItem, ListItemWithFileOrFolder} from "../list/index.js";
import {ChangeItemResponse} from "./ChangeItemResponse.js";
import {AbstractList} from "../list/AbstractList.js";

export class ChangeItem<T extends AbstractList> {
    private readonly _list: T;
    private readonly _changeToken: ChangeToken;
    private readonly _changeType: ChangeType;
    private readonly _time: Date;
    private readonly _editor: string;
    private readonly _editorEmailHint: null;
    private readonly _siteId?: string;
    private readonly _itemId?: number;
    private readonly _listId?: string;
    private readonly _webId?: string;
    private readonly _serverRelativeUrl: string;
    private readonly _sharedByUser: null;
    private readonly _sharedWithUsers: null;
    private readonly _uniqueId: string;

    constructor(list: T, changeToken: ChangeToken, changeType: ChangeType, siteId: string, time: Date, editor: string, editorEmailHint: null, itemId: number, listId: string, serverRelativeUrl: string, sharedByUser: null, sharedWithUsers: null, uniqueId: string, webId: string) {
        this._list = list;
        this._changeToken = changeToken;
        this._changeType = changeType;
        this._siteId = siteId;
        this._time = time;
        this._editor = editor;
        this._editorEmailHint = editorEmailHint;
        this._itemId = itemId;
        this._listId = listId;
        this._serverRelativeUrl = serverRelativeUrl;
        this._sharedByUser = sharedByUser;
        this._sharedWithUsers = sharedWithUsers;
        this._uniqueId = uniqueId;
        this._webId = webId;
    }

    static FromResponse<T extends AbstractList>(list: T, response: ChangeItemResponse): ChangeItem<T> {
        return new ChangeItem(
            list,
            ChangeToken.FromResponse(response.ChangeToken),
            response.ChangeType,
            response.SiteId,
            new Date(response.Time),
            response.Editor,
            response.EditorEmailHint,
            response.ItemId,
            response.ListId,
            response.ServerRelativeUrl,
            response.SharedByUser,
            response.SharedWithUsers,
            response.UniqueId,
            response.WebId
        );
    }

    get changeToken(): ChangeToken {
        return this._changeToken;
    }

    get changeType(): ChangeType {
        return this._changeType;
    }

    get siteId(): string | undefined {
        return this._siteId;
    }

    /**
     * The date and time of the change.
     * Same as the changeToken's time, but only precise to the second.
     */
    get time(): Date {
        return this._time;
    }

    get editor(): string {
        return this._editor;
    }

    get editorEmailHint(): null {
        return this._editorEmailHint;
    }

    get itemId(): number | undefined {
        return this._itemId;
    }

    get listId(): string | undefined {
        return this._listId;
    }

    get serverRelativeUrl(): string {
        return this._serverRelativeUrl;
    }

    get sharedByUser(): null {
        return this._sharedByUser;
    }

    get sharedWithUsers(): null {
        return this._sharedWithUsers;
    }

    get uniqueId(): string {
        return this._uniqueId;
    }

    get webId(): string | undefined {
        return this._webId;
    }

    get list(): T {
        return this._list;
    }

    async getListItem(): Promise<ListItem<T> | undefined> {
        return this.itemId && this.list.getItemById(this.itemId);
    }

    getPartialListItem(): PartialListItemById<T> | undefined {
        return this.itemId && this.list.getPartialItemById(this.itemId);
    }

    async getListItemWithFileOrFolder(): Promise<ListItemWithFileOrFolder<T> | undefined> {
        return this.itemId && this.list.getItemByIdWithFileOrFolder(this.itemId);
    }

    toJSON(): object {
        return {
            //list: this.list,
            changeToken: this.changeToken,
            changeType: ChangeType[this.changeType],
            siteId: this.siteId,
            time: this.time,
            editor: this.editor,
            editorEmailHint: this.editorEmailHint,
            itemId: this.itemId,
            listId: this.listId,
            serverRelativeUrl: this.serverRelativeUrl,
            sharedByUser: this.sharedByUser,
            sharedWithUsers: this.sharedWithUsers,
            uniqueId: this.uniqueId,
            webId: this.webId
        };
    }
}