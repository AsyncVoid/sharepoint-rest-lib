export interface ChangeTokenResponse {
    /** <version>;<scopeKind>;<scopeGuid>;<changeTimeTicks>;<changeNumber> */
    StringValue: string;
}

enum ScopeKind {
    ContentDB = 0,
    Site = 1,
    Web = 2,
    List = 3
}

const TICKS_AT_UNIX_EPOCH = 62135596800000 * 10000;
const MS_IN_TICKS = 10000;
const SECOND_IN_TICKS = 10000000;
const MINUTE_IN_TICKS = 600000000;
const DAY_IN_TICKS = 864000000000;

const INVALID_CHANGE_NUMBER = -1;
const INVALID_CHANGE_TIME = 0;

/**
 * Completely immutable, adding time will create a new ChangeToken
 */
export class ChangeToken {

    private readonly _version: number;
    private readonly _scopeKind: ScopeKind;
    private readonly _scopeGUID: string;
    private readonly _changeTimeTicks: number;
    private readonly _changeNumber: number;

    private constructor(version: number, scopeKind: ScopeKind, scopeGUID: string, changeTimeTicks: number, changeNumber: number) {
        this._version = version;
        this._scopeKind = scopeKind;
        this._scopeGUID = scopeGUID;
        this._changeTimeTicks = changeTimeTicks;
        this._changeNumber = changeNumber;
    }

    get version(): number {
        return this._version;
    }

    get scopeKind(): ScopeKind {
        return this._scopeKind;
    }

    /**
     * For a list-scoped change this will be the GUID of the list
     */
    get scopeGUID(): string {
        return this._scopeGUID;
    }

    get changeTimeTicks(): number {
        return this._changeTimeTicks;
    }

    get changeNumber(): number {
        return this._changeNumber;
    }

    public getDate(): Date {
        return ChangeToken.TicksToDate(this._changeTimeTicks);
    }

    public withDate(date: Date): ChangeToken {
        const ticks = ChangeToken.DateToTicks(date);
        return new ChangeToken(this.version, this.scopeKind, this.scopeGUID, ticks, INVALID_CHANGE_NUMBER);
    }

    public addSeconds(seconds: number): ChangeToken {
        const change = seconds * SECOND_IN_TICKS;
        return new ChangeToken(this.version, this.scopeKind, this.scopeGUID, this.changeTimeTicks + change, INVALID_CHANGE_NUMBER);
    }

    public addMinutes(minutes: number): ChangeToken {
        const change = minutes * MINUTE_IN_TICKS;
        return new ChangeToken(this.version, this.scopeKind, this.scopeGUID, this.changeTimeTicks + change, INVALID_CHANGE_NUMBER);
    }

    public addDays(days: number): ChangeToken {
        const change = days * DAY_IN_TICKS;
        return new ChangeToken(this.version, this.scopeKind, this.scopeGUID, this.changeTimeTicks + change, INVALID_CHANGE_NUMBER);
    }

    public toString(): string {
        return `${this.version};${this.scopeKind};${this.scopeGUID};${this.changeTimeTicks};${this.changeNumber}`;
    }

    static FromResponse(changeTokenResponse: ChangeTokenResponse) {
        return ChangeToken.FromString(changeTokenResponse.StringValue);
    }

    static FromString(changeTokenValue: string) {
        const [versionStr, scopeKindStr, scopeGUID, changeTimeTicksStr, changeNumberStr] = changeTokenValue.split(";");
        return new ChangeToken(parseInt(versionStr), parseInt(scopeKindStr), scopeGUID, parseInt(changeTimeTicksStr), parseInt(changeNumberStr));
    }

    static CreateScopeChangeToken(scopeKind: ScopeKind, scopeGUID: string, changeTime?: Date) {
        return new ChangeToken(1, scopeKind, scopeGUID, ChangeToken.DateToTicks(changeTime ?? new Date()), INVALID_CHANGE_NUMBER);
    }

    static CreateSiteChangeToken(siteId: string, changeTime?: Date): ChangeToken {
        return ChangeToken.CreateScopeChangeToken(ScopeKind.Site, siteId, changeTime);
    }

    static CreateWebChangeToken(webId: string, changeTime?: Date): ChangeToken {
        return ChangeToken.CreateScopeChangeToken(ScopeKind.Web, webId, changeTime);
    }

    static CreateContentDBChangeToken(contentDbId: string, changeTime?: Date): ChangeToken {
        return ChangeToken.CreateScopeChangeToken(ScopeKind.ContentDB, contentDbId, changeTime);
    }

    static CreateListChangeToken(listId: string, changeTime?: Date): ChangeToken {
        return ChangeToken.CreateScopeChangeToken(ScopeKind.List, listId, changeTime);
    }

    static TicksToDate(ticks: number): Date {
        const ticksSinceEpoch = ticks - TICKS_AT_UNIX_EPOCH;
        const msSinceEpoch = Math.floor(ticksSinceEpoch / MS_IN_TICKS);
        return new Date(msSinceEpoch);
    }

    static DateToTicks(date: Date): number {
        const unixTimestamp = date.valueOf();
        return (unixTimestamp * MS_IN_TICKS) + TICKS_AT_UNIX_EPOCH;
    }

    toJSON() {
        return {
            version: this.version,
            scopeKind: ScopeKind[this.scopeKind],
            scopeGUID: this.scopeGUID,
            changeTimeTicks: this.changeTimeTicks,
            changeNumber: this.changeNumber,
            date: this.getDate()
        }
    }

    toSendable() {
        return {
            StringValue: this.toString()
        }
    }
}