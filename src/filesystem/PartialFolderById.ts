import {AbstractFolder} from "./AbstractFolder.js";
import {Site} from "../Site.js";

export class PartialFolderById extends AbstractFolder {
    private readonly _id: string;

    constructor(site: Site, id: string) {
        super(site);
        this._id = id;
    }

    get baseUrl(): string {
        return `${this.site.baseUrl}_api/Web/GetFolderById('${encodeURIComponent(this.id)}')/`;
    }

    public toString(): string {
        return this.id;
    }

    get id(): string {
        return this._id;
    }
}