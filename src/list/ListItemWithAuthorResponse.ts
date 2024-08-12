import {ListItemResponse} from "./ListItemResponse.js";
import {ExpandedUserInfoItemResponse} from "../user/ExpandedUserInfoItemResponse.js";

export interface ListItemWithAuthorResponse extends ListItemResponse {
    Author?: ExpandedUserInfoItemResponse;
}