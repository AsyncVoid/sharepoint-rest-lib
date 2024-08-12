export interface OData {
    "odata.type": "SP.List" | "SP.File" | "SP.Folder" | "SP.Data.UserInfoItem" | "Microsoft.SharePoint.Webhooks.Subscription" | string,
    "odata.id": string,
    "odata.etag": string,
    "odata.editLink": string
    "odata.null": boolean,
}