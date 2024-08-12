import {ChangeItem} from "./ChangeItem.js";
import {ChangeType} from "./ChangeType.js";
import {ChangeToken} from "./ChangeToken.js";
import {ChangeListResponse} from "./ChangeListResponse.js";
import {ChangeItemResponse} from "./ChangeItemResponse.js";
import {AbstractList} from "../list/AbstractList.js";

/**
 * An array, containing a list of change items.
 * The first item in the array is the oldest change item (the least ticks).
 * The last item in the array is the latest change item (the most ticks).
 */
export class ChangeList<T extends AbstractList> {

    private readonly _items: ChangeItem<T>[];

    private constructor(items: ChangeItem<T>[] = []) {
        this._items = [...items];
    }

    static FromResponse<T extends AbstractList>(list: T, response: ChangeListResponse): ChangeList<T> {
        return new ChangeList(response.value.map((changeItem: ChangeItemResponse) => ChangeItem.FromResponse(list, changeItem)));
    }

    get items(): ChangeItem<T>[] {
        return [...this._items];
    }

    get length(): number {
        return this._items.length;
    }

    get start(): ChangeToken | undefined {
        return this._items[0]?.changeToken;
    }

    get end(): ChangeToken | undefined {
        return this._items[this._items.length - 1]?.changeToken;
    }

    get(index: number): ChangeItem<T> {
        return this._items[index];
    }

    concat(changeList: ChangeList<T>): ChangeList<T> {
        return new ChangeList(this._items.concat(changeList._items));
    }

    slice(start?: number, end?: number): ChangeList<T> {
        return new ChangeList(this._items.slice(start, end));
    }

    splice(start: number, deleteCount?: number): ChangeList<T> {
        return new ChangeList(this._items.splice(start, deleteCount));
    }

    map<U>(callbackFn: (value: ChangeItem<T>, index: number, changeList: ChangeList<T>) => U, thisArg?: any): U[] {
        return this._items.map((value, index) => {
            return callbackFn(value, index, this);
        }, thisArg);
    }

    filter(predicate: (value: ChangeItem<T>, index: number, changeList: ChangeList<T>) => boolean, thisArg?: any): ChangeList<T> {
        return new ChangeList(this._items.filter((value, index) => {
            return predicate(value, index, this);
        }, thisArg));
    }

    removeListItemlessChanges(): ChangeList<T> {
        return this.filter((changeItem: ChangeItem<T>) => changeItem.itemId !== undefined);
    }

    removeListIdlessChanges(): ChangeList<T> {
        return this.filter((changeItem: ChangeItem<T>) => changeItem.listId !== undefined);
    }

    removeWebIdlessChanges(): ChangeList<T> {
        return this.filter((changeItem: ChangeItem<T>) => changeItem.webId !== undefined);
    }

    removeSiteIdlessChanges(): ChangeList<T> {
        return this.filter((changeItem: ChangeItem<T>) => changeItem.siteId !== undefined);
    }

    removeDeletedItems(): ChangeList<T> {
        const deletedTicks: Map<number, number> = new Map<number, number>();
        const deletedItemIds= new Set<number>();
        this._items
            .filter((changeItem: ChangeItem<T>) => changeItem.itemId !== undefined)
            .filter((changeItem: ChangeItem<T>) => changeItem.changeType === ChangeType.DeleteObject)
            .forEach((changeItem: ChangeItem<T>) => {
                deletedItemIds.add(changeItem.itemId);
                deletedTicks.set(changeItem.itemId, changeItem.changeToken.changeTimeTicks);
            });
        // console.log("Deleted item ids:", deletedItemIds.size);
        const result = this.filter((changeItem: ChangeItem<T>) => {
            if (deletedItemIds.has(changeItem.itemId)) {
                return changeItem.changeToken.changeTimeTicks >= deletedTicks.get(changeItem.itemId);
            }
            return true;
        });
        // console.log("After deletion:", result.length);
        return result;
    }

    toJSON(): object {
        return {
            items: this._items,
            start: this.start,
            end: this.end
        };
    }
}