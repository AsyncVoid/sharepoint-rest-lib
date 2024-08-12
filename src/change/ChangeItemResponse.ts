import {ChangeTokenResponse} from "./ChangeToken.js";

export interface ChangeItemResponse {
    readonly ChangeToken: ChangeTokenResponse;
    readonly ChangeType: number;
    readonly SiteId: string;
    readonly Time: string;
    readonly Editor: string;
    readonly EditorEmailHint: null;
    readonly ItemId: number;
    readonly ListId: string;
    readonly ServerRelativeUrl: string;
    readonly SharedByUser: null;
    readonly SharedWithUsers: null;
    readonly UniqueId: string;
    readonly WebId: string;
}