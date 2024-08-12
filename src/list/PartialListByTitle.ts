import {Site} from "../Site.js";
import {AbstractList} from "./AbstractList.js";

export class PartialListByTitle extends AbstractList {
    private readonly _title: string;

    constructor(site: Site, title: string) {
        super(site);
        this._title = title;
    }

    get baseUrl(): string {
        return `${this._site.baseUrl}_api/Web/Lists/GetByTitle('${this._title}')/`;
    }

    get title(): string {
        return this._title;
    }

    toJSON(): object {
        return {
            ...super.toJSON(),
            title: this.title,
        }
    }
}