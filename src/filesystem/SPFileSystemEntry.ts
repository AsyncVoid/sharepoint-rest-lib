import {Site} from "../Site.js";
import {SPPath} from "./SPPath.js";
export abstract class SPFileSystemEntry {
    protected readonly _site: Site;
    protected readonly _exists: boolean;
    protected readonly _existsAllowThrowForPolicyFailures: boolean;
    protected readonly _name: string;
    protected readonly _serverRelativeUrl: string;
    protected readonly _timeCreated: Date;
    protected readonly _timeLastModified: Date;
    protected readonly _uniqueId: string;

    protected constructor(site: Site, exists: boolean, existsAllowThrowForPolicyFailures: boolean, name: string, serverRelativeUri: string, timeCreated: Date, timeLastModified: Date, uniqueId: string) {
        this._site = site;
        this._exists = exists;
        this._existsAllowThrowForPolicyFailures = existsAllowThrowForPolicyFailures;
        this._name = name;
        this._serverRelativeUrl = serverRelativeUri;
        this._timeCreated = timeCreated;
        this._timeLastModified = timeLastModified;
        this._uniqueId = uniqueId;
    }

    get site(): Site {
        return this._site;
    }

    get exists(): boolean {
        return this._exists;
    }

    get existsAllowThrowForPolicyFailures(): boolean {
        return this._existsAllowThrowForPolicyFailures;
    }

    get name(): string {
        return this._name;
    }

    get serverRelativeUrl(): string {
        return this._serverRelativeUrl;
    }

    get timeCreated(): Date {
        return this._timeCreated;
    }

    get timeLastModified(): Date {
        return this._timeLastModified;
    }

    get uniqueId(): string {
        return this._uniqueId;
    }

    public toString(): string {
        return this.serverRelativeUrl;
    }

    public getPath(): SPPath {
        return SPPath.FromFileSystemEntry(this);
    }

    public toJSON() {
        return {
            // site: this.site,
            name: this.name,
            serverRelativeUrl: this.serverRelativeUrl,
            timeCreated: this.timeCreated,
            timeLastModified: this.timeLastModified,
            uniqueId: this.uniqueId,
            exists: this.exists,
            existsAllowThrowForPolicyFailures: this.existsAllowThrowForPolicyFailures,
        }
    }
}