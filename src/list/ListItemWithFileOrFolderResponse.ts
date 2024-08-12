import {ListItemResponse} from "./ListItemResponse.js";
import {FileResponse, FolderResponse} from "../filesystem/index.js";

export interface ListItemWithFileOrFolderResponse extends ListItemResponse {
    File?: FileResponse;
    Folder?: FolderResponse;
}