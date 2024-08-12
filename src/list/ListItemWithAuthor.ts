import {ListItem} from "./ListItem.js";
import {ExpandedUserInfoItem} from "../user/index.js";
import {AbstractList} from "./AbstractList.js";

export interface ListItemWithAuthor<T extends AbstractList> {
    listItem: ListItem<T>;
    author?: ExpandedUserInfoItem;
}