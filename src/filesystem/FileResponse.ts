import {OData} from "../OData.js";

export interface FileResponse extends OData {
    readonly CheckInComment: string;
    readonly CheckOutType: number;
    readonly ContentTag: string;
    // readonly CustomizedPageStatus: number;
    readonly ETag: number;
    readonly Exists: boolean;
    readonly ExistsAllowThrowForPolicyFailures: boolean;
    readonly IrmEnabled: boolean;
    readonly Length: string; // It is formatted as a string presumably because it is 64 bit, larger than the max safe integer in JS
    readonly Level: number;
    // readonly linkingUri: string | null;
    // readonly linkingUrl: string | null;
    readonly MajorVersion: number;
    readonly MinorVersion: number;
    readonly Name: string;
    readonly ServerRelativeUrl: string;
    readonly TimeCreated: string;
    readonly TimeLastModified: string;
    // readonly title: string | null;
    // readonly uiVersion: number;
    readonly UniqueId: string;
}