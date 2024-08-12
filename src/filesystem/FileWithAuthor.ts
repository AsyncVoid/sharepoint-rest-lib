import {ExpandedUserInfoItem} from "../user/index.js";
import {SPFile} from "./SPFile.js";

export interface FileWithAuthor {
    file: SPFile;
    author?: ExpandedUserInfoItem;
}