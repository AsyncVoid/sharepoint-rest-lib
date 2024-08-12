import {AbstractFile} from "./AbstractFile.js";
import {Site} from "../Site.js";

export class PartialFile extends AbstractFile {
    constructor(site: Site, serverRelativeUrl: string) {
        super(site, serverRelativeUrl);
    }
}