import {SPFile} from "./SPFile.js";
import {SPFolder} from "./SPFolder.js";

export interface TreeNodeFile {
    readonly type: "SP.File";
    readonly value: SPFile;
}

export interface TreeNodeFolder {
    readonly type: "SP.Folder";
    readonly value: SPFolder;
    readonly files: TreeNodeFile[];
    readonly folders: TreeNodeFolder[];
}