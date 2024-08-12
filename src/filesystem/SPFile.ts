import {Site} from "../Site.js";
import {SPFileLevel} from "./SPFileLevel.js";
import {IFileSystemEntry} from "./IFileSystemEntry.js";
import {CheckOutType} from "./CheckOutType.js";
import {FileResponse} from "./FileResponse.js";
import {AbstractFile} from "./AbstractFile.js";

/**
 * Represents a file in SharePoint
 * @description https://learn.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee543658(v=office.15)
 * @example
 * const file = await site.getFile("Shared Documents/MyFile.txt");
 * console.log(file.name); // "MyFile.txt"
 * console.log(file.serverRelativeUrl); // "/sites/MySite/Shared Documents/MyFile.txt"
 */
export class SPFile extends AbstractFile implements IFileSystemEntry {
    // Shared properties with IFileSystemEntry
    protected readonly _exists: boolean;
    protected readonly _existsAllowThrowForPolicyFailures: boolean;
    protected readonly _name: string;
    protected readonly _timeCreated: Date;
    protected readonly _timeLastModified: Date;
    protected readonly _uniqueId: string;

    // File specific properties
    private readonly _checkInComment: string;
    private readonly _checkOutType: CheckOutType;
    private readonly _contentTag: string;
    private readonly _eTag: number;
    private readonly _irmEnabled: boolean;
    private readonly _length: number; // from string
    private readonly _level: SPFileLevel;
    private readonly _majorVersion: number;
    private readonly _minorVersion: number;
    // private readonly customizedPageStatus: number;
    // private readonly linkingUri: string | null;
    // private readonly linkingUrl: string | null;
    // private readonly title: string | null;
    // private readonly uiVersion: number;

    private constructor(site: Site, response: FileResponse) {
        super(site, response.ServerRelativeUrl);
        this._exists = response.Exists;
        this._existsAllowThrowForPolicyFailures = response.ExistsAllowThrowForPolicyFailures;
        this._name = response.Name;
        this._timeCreated = new Date(response.TimeCreated);
        this._timeLastModified = new Date(response.TimeLastModified);
        this._uniqueId = response.UniqueId;

        this._checkInComment = response.CheckInComment;
        this._checkOutType = response.CheckOutType;
        this._contentTag = response.ContentTag;
        this._eTag = response.ETag;
        this._irmEnabled = response.IrmEnabled;
        this._length = parseInt(response.Length);
        this._level = response.Level;
        this._majorVersion = response.MajorVersion;
        this._minorVersion = response.MinorVersion;
    }

    public async get(): Promise<SPFile> {
        return this;
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

    get exists(): boolean {
        return false;
    }

    get existsAllowThrowForPolicyFailures(): boolean {
        return false;
    }

    get checkInComment(): string {
        return this._checkInComment;
    }

    get checkOutType(): CheckOutType {
        return this._checkOutType;
    }

    get contentTag(): string {
        return this._contentTag;
    }

    get eTag(): number {
        return this._eTag;
    }

    get irmEnabled(): boolean {
        return this._irmEnabled;
    }

    get length(): number {
        return this._length;
    }

    get level(): SPFileLevel {
        return this._level;
    }

    get majorVersion(): number {
        return this._majorVersion;
    }

    get minorVersion(): number {
        return this._minorVersion;
    }

    public toJSON() {
        return {
            ...super.toJSON(),
            name: this.name,
            timeCreated: this.timeCreated,
            timeLastModified: this.timeLastModified,
            uniqueId: this.uniqueId,
            exists: this.exists,
            existsAllowThrowForPolicyFailures: this.existsAllowThrowForPolicyFailures,
            length: this.length,
            level: this.level,
            checkInComment: this.checkInComment,
            checkOutType: CheckOutType[this.checkOutType],
            contentTag: this.contentTag,
            eTag: this.eTag,
            irmEnabled: this.irmEnabled,
            majorVersion: this.majorVersion,
            minorVersion: this.minorVersion,
        }
    }

    static FromResponse(site: Site, response: FileResponse): SPFile | undefined {
        if (!response || response["odata.null"]) return;
        return new SPFile(site, response);
    }
}
