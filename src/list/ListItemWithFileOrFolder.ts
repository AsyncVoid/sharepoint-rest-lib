import {ListItem} from "./ListItem.js";
import {SPFile, SPFolder} from "../filesystem/index.js";
import {AbstractList} from "./AbstractList.js";

export interface ListItemWithFileOrFolder<T extends AbstractList> {
    listItem: ListItem<T>;
    file?: SPFile;
    folder?: SPFolder;
}