import {OData} from "../OData.js";

export interface ExpandedUserInfoItemResponse extends OData {
    readonly Id: number;
    readonly ContentTypeId: string;
    readonly Title: string;
    readonly OData__ColorTag: null;
    readonly ComplianceAssetId: string;
    readonly Name: string;
    readonly EMail: string | null;
    readonly OtherMail: string | null;
    readonly UserExpiration: null;
    readonly UserLastDeletionTime: null;
    readonly MobilePhone: null;
    readonly SipAddress: null;
    readonly Department: string | null;
    readonly JobTitle: string | null;
    readonly FirstName: string | null;
    readonly LastName: string | null;
    readonly WorkPhone: string | null;
    readonly UserName: string;
    readonly Office: null;
    readonly SPSPicturePlaceholderState: number;
    readonly SPSPictureExchangeSyncState: null;
    readonly ID: number;
    readonly Modified: string;
    readonly Created: string;
    readonly OData__UIVersionString: string;
    readonly GUID: string;
}
