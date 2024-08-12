import {OData} from "../OData.js";

export interface ListItemResponse extends OData {
    Id: number;
    ID: number;
    Title: string;
    GUID: string;
    Created: string;
    Modified: string;
    AuthorId: number;
    FileSystemObjectType: number;
    ServerRedirectedEmbedUri: string | null;
    ServerRedirectedEmbedUrl: string;
    ContentTypeId: string;
    ComplianceAssetId: string;
    EditorId: number;
    CheckoutUserId: number | null;
    Attachments?: boolean;
    // OData__ColorTag: null;
    // MediaServiceImageTags?: [{Label: string, TermGuid: string, WssId: number}];
    // MediaServiceOCR?: string;
    // Sign_x002d_off_x0020_status?: null;
    // SharedWithUsersId: null;
    // SharedWithDetails: null;
    // OData__CopySource: null;
    // OData__UIVersionString: string;
}
