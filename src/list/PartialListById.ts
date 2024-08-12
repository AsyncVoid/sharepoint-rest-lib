import {Site} from "../Site.js";
import {ChangeToken} from "../change/index.js";
import {AbstractList} from "./AbstractList.js";

export class PartialListById extends AbstractList {
    private readonly _id: string;

    constructor(site: Site, id: string) {
        super(site, );
        this._id = id;
    }

    get baseUrl(): string {
        return `${this._site.baseUrl}_api/Web/Lists(guid'${this._id}')/`;
    }

    get id(): string {
        return this._id;
    }

    toJSON(): object {
        return {
            ...super.toJSON(),
            id: this.id,
        }
    }

    createChangeToken(changeTime?: Date) {
        return ChangeToken.CreateListChangeToken(this.id, changeTime);
    }
}