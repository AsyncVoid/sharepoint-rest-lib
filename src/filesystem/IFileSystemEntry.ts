import {SPPath} from "./SPPath.js";
import {HasServerRelativeUrl} from "./HasServerRelativeUrl.js";

export interface IFileSystemEntry extends HasServerRelativeUrl {
    get exists(): boolean;

    get existsAllowThrowForPolicyFailures(): boolean;

    get name(): string;

    get serverRelativeUrl(): string;

    get timeCreated(): Date;

    get timeLastModified(): Date;

    get uniqueId(): string;

    toString(): string;

    getPath(): SPPath;
}