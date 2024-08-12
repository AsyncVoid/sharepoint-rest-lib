import {OData} from "../OData.js";

export interface FolderResponse extends OData {
    readonly Exists: boolean;
    readonly ExistsAllowThrowForPolicyFailures: boolean;
    readonly IsWOPIEnabled: boolean;
    readonly ItemCount: number;
    readonly Name: string;
    // private readonly ProgID: null;
    readonly ServerRelativeUrl: string;
    readonly TimeCreated: string;
    readonly TimeLastModified: string;
    readonly UniqueId: string;
    // private readonly WelcomePage: "";
}