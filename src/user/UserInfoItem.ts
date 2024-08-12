import {UserInfoItemResponse} from "./UserInfoItemResponse.js";
import {ExpandedUserInfoItem} from "./ExpandedUserInfoItem.js";

export class UserInfoItem extends ExpandedUserInfoItem {
    private readonly _serverRedirectedEmbedUri: string;
    private readonly _serverRedirectedEmbedUrl: string;
    private readonly _isSiteAdmin: boolean;
    private readonly _deleted: boolean;
    private readonly _userInfoHidden: boolean;
    private readonly _picture: {
        readonly description: string;
        readonly url: string;
    }
    private readonly _webSite: string | null;
    private readonly _authorId: number;
    private readonly _editorId: number;
    private readonly _attachments: boolean;

    constructor(
        id: number,
        serverRedirectedEmbedUri: string,
        serverRedirectedEmbedUrl: string,
        contentTypeId: string,
        title: string,
        complianceAssetId: string,
        name: string,
        email: string | null,
        otherMail: string | null,
        isSiteAdmin: boolean,
        deleted: boolean,
        userInfoHidden: boolean,
        picture: {
            description: string;
            url: string;
        },
        department: string | null,
        jobTitle: string | null,
        firstName: string | null,
        lastName: string | null,
        workPhone: string | null,
        userName: string,
        webSite: string | null,
        modified: string,
        created: string,
        authorId: number,
        editorId: number,
        oDataUIVersionString: string,
        attachments: boolean,
        guid: string
    ) {
        super(id, contentTypeId, title, complianceAssetId, name, email, otherMail, department, jobTitle, firstName, lastName, workPhone, userName, modified, created, oDataUIVersionString, guid);
        this._serverRedirectedEmbedUri = serverRedirectedEmbedUri;
        this._serverRedirectedEmbedUrl = serverRedirectedEmbedUrl;
        this._isSiteAdmin = isSiteAdmin;
        this._deleted = deleted;
        this._userInfoHidden = userInfoHidden;
        this._picture = picture;
        this._webSite = webSite;
        this._authorId = authorId;
        this._editorId = editorId;
        this._attachments = attachments;
    }

    static FromResponse(response: UserInfoItemResponse): UserInfoItem | undefined {
        if (!response || response["odata.null"]) return;
        return new UserInfoItem(
            response.Id ?? response.ID,
            response.ServerRedirectedEmbedUri,
            response.ServerRedirectedEmbedUrl,
            response.ContentTypeId,
            response.Title,
            response.ComplianceAssetId,
            response.Name,
            response.EMail,
            response.OtherMail,
            response.IsSiteAdmin,
            response.Deleted,
            response.UserInfoHidden,
            response.Picture && {
                description: response.Picture.Description,
                url: response.Picture.Url
            },
            response.Department,
            response.JobTitle,
            response.FirstName,
            response.LastName,
            response.WorkPhone,
            response.UserName,
            response.WebSite,
            response.Modified,
            response.Created,
            response.AuthorId,
            response.EditorId,
            response.OData__UIVersionString,
            response.Attachments,
            response.GUID
        );
    }

    get serverRedirectedEmbedUri(): string {
        return this._serverRedirectedEmbedUri;
    }

    get serverRedirectedEmbedUrl(): string {
        return this._serverRedirectedEmbedUrl;
    }

    get isSiteAdmin(): boolean {
        return this._isSiteAdmin;
    }

    get deleted(): boolean {
        return this._deleted;
    }

    get userInfoHidden(): boolean {
        return this._userInfoHidden;
    }

    get picture(): {
        readonly description: string;
        readonly url: string;
    } {
        return this._picture;
    }

    get webSite(): string | null {
        return this._webSite;
    }

    get authorId(): number {
        return this._authorId;
    }

    get editorId(): number {
        return this._editorId;
    }

    get attachments(): boolean {
        return this._attachments;
    }

    toJSON(): object {
        return {
            ...super.toJSON(),
            serverRedirectedEmbedUri: this.serverRedirectedEmbedUri,
            serverRedirectedEmbedUrl: this.serverRedirectedEmbedUrl,
            isSiteAdmin: this.isSiteAdmin,
            deleted: this.deleted,
            userInfoHidden: this.userInfoHidden,
            picture: this.picture,
            webSite: this.webSite,
            authorId: this.authorId,
            editorId: this.editorId,
            attachments: this.attachments,
        }
    }
}