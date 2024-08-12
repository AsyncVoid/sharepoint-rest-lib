import {ProviderType, ProviderTypeNames} from "./ProviderType.js";
import {ClaimType, ClaimTypeNames} from "./ClaimType.js";
import {ClaimValueType, ClaimValueTypeNames} from "./ClaimValueType.js";
import {OriginalIssuerType, OriginalIssuerTypeNames} from "./OriginalIssuerType.js";

// "i:0#.f|membership|test@email.com"

const REGEX = /^(?<providerType>[iec]):0(?<claimType>[!-+\--9<-@\[-m])(?<claimValueType>[!-+\--1])(?<originalIssuerType>[cfstwxy])(\|(?<originalIssuerEncoded>[^|]*))?\|(?<claimValue>.+)$/;

export class ClaimBasedIdentity {
    private readonly _providerType: ProviderType;
    private readonly _claimType: ClaimType;
    private readonly _claimValueType: ClaimValueType;
    private readonly _originalIssuerType: OriginalIssuerType;
    private readonly _originalIssuerEncoded?: string;
    private readonly _claimValue: string;

    constructor(providerType: ProviderType, claimType: ClaimType, claimValueType: ClaimValueType, originalIssuerType: OriginalIssuerType, originalIssuerEncoded: string | undefined, claimValue: string) {
        this._providerType = providerType;
        this._claimType = claimType;
        this._claimValueType = claimValueType;
        this._originalIssuerType = originalIssuerType;
        this._originalIssuerEncoded = originalIssuerEncoded;
        this._claimValue = claimValue;
    }

    private static DecodeClaimValue(claimValue: string): string {
        return claimValue
            .replace("%2C", ",").replace("%2c", ",")
            .replace("%3A", ":").replace("%3a", ":")
            .replace("%3B", ";").replace("%3b", ";")
            .replace("%0A", "\n").replace("%0a", "\n")
            .replace("%0D", "\r").replace("%0d", "\r")
            .replace("%7C", "|").replace("%7c", "|")
            .replace("%25", "%")
    }

    private static EncodeClaimValue(claimValue: string): string {
        return claimValue.replace("%", "%25").replace(",", "%2C")
            .replace(":", "%3A").replace(";", "%3B")
            .replace("\n", "%0A").replace("\r", "%0D")
            .replace("|", "%7C")
    }

    static FromString(claimBasedIdentity: string): ClaimBasedIdentity | undefined {
        const matches = REGEX.exec(claimBasedIdentity);
        if (matches === null) {
            return;
        }
        const groups = matches.groups!;
        return new ClaimBasedIdentity(
            groups.providerType as ProviderType,
            groups.claimType as ClaimType,
            groups.claimValueType as ClaimValueType,
            groups.originalIssuerType as OriginalIssuerType,
            groups.originalIssuerEncoded,
            ClaimBasedIdentity.DecodeClaimValue(groups.claimValue)
        );
    }

    get providerType(): ProviderType {
        return this._providerType;
    }

    get claimType(): ClaimType {
        return this._claimType;
    }

    get claimValueType(): ClaimValueType {
        return this._claimValueType;
    }

    get originalIssuerType(): OriginalIssuerType {
        return this._originalIssuerType;
    }

    get originalIssuerEncoded(): string | undefined {
        return this._originalIssuerEncoded;
    }

    get claimValue(): string {
        return this._claimValue;
    }

    get claimValueEncoded(): string {
        return ClaimBasedIdentity.EncodeClaimValue(this._claimValue);
    }

    /**
     * Returns true if this is an Office 365 SharePoint Online - Sharepoint App claim.
     * I.e. it is the Sharepoint App itself
     * @returns {boolean}
     */
    get isSharePointApp(): boolean {
        return this.providerType === ProviderType.Identity
            && this.claimType === ClaimType.NameId
            && this.originalIssuerType === OriginalIssuerType.TrustedProvider
            && this.originalIssuerEncoded === "00000003-0000-0ff1-ce00-000000000000";
    }

    // get originalIssuer(): string | undefined {
    //     if (this.originalIssuerEncoded === undefined) {
    //         return OriginalIssuerTypeNames[this.originalIssuerType];
    //     }
    //     return `${OriginalIssuerTypeNames[this.originalIssuerType]}:${this.originalIssuerEncoded}`;
    // }

    get stringValue(): string {
        if (this.originalIssuerEncoded === undefined) {
            return `${this.providerType}:0${this.claimType}${this.claimValueType}${this.originalIssuerType}|${this.claimValueEncoded}`;
        }
        return `${this.providerType}:0${this.claimType}${this.claimValueType}${this.originalIssuerType}|${this.originalIssuerEncoded}|${this.claimValueEncoded}`;
    }

    toString(): string {
        return this.stringValue
    }

    // getClaimValueDecoded(): string | undefined {
    //     if (this.claimValue === undefined) {
    //         return;
    //     }
    //     switch (this.claimValueType) {
    //         case ClaimValueType.Base64Binary:
    //             return this.getClaimValueFromBase64()
    //         case ClaimValueType.Bool:
    //             return this.getClaimValueFromBool();
    //         case ClaimValueType.Date:
    //             return this.getClaimValueFromDate();
    //     }
    // }
    //
    // getClaimValueFromBase64(): string | undefined {
    //     return this.claimValue ? Buffer.from(this.claimValue, "base64").toString("utf-8") : undefined;
    // }
    //
    // getClaimValueFromBool(): boolean {
    //     switch (this.claimValue) {
    //         case "True":
    //         case "true":
    //             return true;
    //         default:
    //             return false;
    //     }
    // }
    //
    // getClaimValueFromDate(): Date | undefined {
    //     return this.claimValue ? new Date(this.claimValue) : undefined;
    //
    // }

    toJSON(): object {
        return {
            providerType: ProviderTypeNames[this.providerType],
            claimType: ClaimTypeNames[this.claimType],
            claimValueType: ClaimValueTypeNames[this.claimValueType],
            originalIssuerType: OriginalIssuerTypeNames[this.originalIssuerType],
            originalIssuerEncoded: this.originalIssuerEncoded,
            // originalIssuer: this.originalIssuer,
            claimValue: this.claimValue,
            stringValue: this.stringValue
        }
    }
}
//
// console.log(JSON.stringify(ClaimBasedIdentity.FromString("i:0#.f|membership|test@email.com"), null, 4));
// console.log(JSON.stringify(ClaimBasedIdentity.FromString("c:0-.t|adfs|S-1-5-21-123456789-123456789-123456789-1234"), null, 4));
// console.log(JSON.stringify(ClaimBasedIdentity.FromString("i:05.t|azuread|john.doe@example.com"), null, 4));