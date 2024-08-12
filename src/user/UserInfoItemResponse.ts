import {ExpandedUserInfoItemResponse} from "./ExpandedUserInfoItemResponse.js";
import {keys} from "ts-transformer-keys";
import {OData} from "../OData.js";

export interface UserInfoItemResponse extends ExpandedUserInfoItemResponse {
    readonly FileSystemObjectType: number; // Wtf is this for?
    readonly ServerRedirectedEmbedUri: string;
    readonly ServerRedirectedEmbedUrl: string;
    readonly Notes: null;
    readonly IsSiteAdmin: boolean;
    readonly Deleted: boolean;
    readonly UserInfoHidden: boolean;
    readonly Picture: {
        readonly Description: string;
        readonly Url: string;
    } | null;
    readonly WebSite: string | null;
    readonly SPSResponsibility: null;
    readonly SPSPictureTimestamp: string | null;
    readonly SPSPicturePlaceholderState: number;
    readonly SPSPictureExchangeSyncState: null;
    readonly AuthorId: number;
    readonly EditorId: number;
    readonly Attachments: boolean;
}

export type UserInfoItemKey = keyof UserInfoItemResponse;
export const ExpansionUserInfoItemKeys: UserInfoItemKey[] = keys<Omit<ExpandedUserInfoItemResponse, keyof OData>>() as UserInfoItemKey[];
