import {ExpandedUserInfoItemResponse} from "./ExpandedUserInfoItemResponse.js";
import {ClaimBasedIdentity} from "../claim/ClaimBasedIdentity.js";

export class ExpandedUserInfoItem {
    private readonly _id: number;
    private readonly _contentTypeId: string;
    private readonly _title: string;
    private readonly _complianceAssetId: string;
    private readonly _name: string;
    private readonly _email: string | null;
    private readonly _otherMail: string | null;
    private readonly _department: string | null;
    private readonly _jobTitle: string | null;
    private readonly _firstName: string | null;
    private readonly _lastName: string | null;
    private readonly _workPhone: string | null;
    private readonly _userName: string; // contains email
    private readonly _modified: string;
    private readonly _created: string;
    private readonly _oDataUIVersionString: string;
    private readonly _guid: string;

    constructor(
        id: number,
        contentTypeId: string,
        title: string,
        complianceAssetId: string,
        name: string,
        email: string | null,
        otherMail: string | null,
        department: string | null,
        jobTitle: string | null,
        firstName: string | null,
        lastName: string | null,
        workPhone: string | null,
        userName: string,
        modified: string,
        created: string,
        oDataUIVersionString: string,
        guid: string
    ) {
        this._id = id;
        this._contentTypeId = contentTypeId;
        this._title = title;
        this._complianceAssetId = complianceAssetId;
        this._name = name;
        this._email = email;
        this._otherMail = otherMail;
        this._department = department;
        this._jobTitle = jobTitle;
        this._firstName = firstName;
        this._lastName = lastName;
        this._workPhone = workPhone;
        this._userName = userName;
        this._modified = modified;
        this._created = created;
        this._oDataUIVersionString = oDataUIVersionString;
        this._guid = guid;
    }

    static FromResponse(response: ExpandedUserInfoItemResponse): ExpandedUserInfoItem | undefined {
        if (!response || response["odata.null"]) return;
        // console.log("ExpandedUserInfoItem.FromResponse", response);
        return new ExpandedUserInfoItem(
            response.Id ?? response.ID,
            response.ContentTypeId,
            response.Title,
            response.ComplianceAssetId,
            response.Name,
            response.EMail,
            response.OtherMail,
            response.Department,
            response.JobTitle,
            response.FirstName,
            response.LastName,
            response.WorkPhone,
            response.UserName,
            response.Modified,
            response.Created,
            response.OData__UIVersionString,
            response.GUID
        );
    }

    get id(): number {
        return this._id;
    }

    get contentTypeId(): string {
        return this._contentTypeId;
    }

    get title(): string {
        return this._title;
    }

    get complianceAssetId(): string {
        return this._complianceAssetId;
    }

    get name(): string {
        return this._name;
    }

    get claimBasedIdentity(): ClaimBasedIdentity | undefined {
        return ClaimBasedIdentity.FromString(this._name);
    }

    get email(): string | null {
        return this._email;
    }

    get otherMail(): string | null {
        return this._otherMail;
    }

    get department(): string | null {
        return this._department;
    }

    get jobTitle(): string | null {
        return this._jobTitle;
    }

    get firstName(): string | null {
        return this._firstName;
    }

    get lastName(): string | null {
        return this._lastName;
    }

    get workPhone(): string | null {
        return this._workPhone;
    }

    get userName(): string {
        return this._userName;
    }

    get modified(): string {
        return this._modified;
    }

    get created(): string {
        return this._created;
    }

    get oDataUIVersionString(): string {
        return this._oDataUIVersionString;
    }

    get guid(): string {
        return this._guid;
    }

    toJSON(): object {
        return {
            id: this.id,
            contentTypeId: this.contentTypeId,
            title: this.title,
            complianceAssetId: this.complianceAssetId,
            name: this.name,
            claimBasedIdentity: this.claimBasedIdentity,
            email: this.email,
            otherMail: this.otherMail,
            department: this.department,
            jobTitle: this.jobTitle,
            firstName: this.firstName,
            lastName: this.lastName,
            workPhone: this.workPhone,
            userName: this.userName,
            modified: this.modified,
            created: this.created,
            oDataUIVersionString: this.oDataUIVersionString,
            guid: this.guid
        }
    }
}
