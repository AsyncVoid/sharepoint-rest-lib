import {FileResponse} from "./FileResponse.js";
import {ExpandedUserInfoItemResponse} from "../user/ExpandedUserInfoItemResponse.js";

export interface FileWithAuthorResponse extends FileResponse {
    Author?: ExpandedUserInfoItemResponse;
}