import * as axios from "axios";

export enum ErrorKind {
    ITEM_NOT_FOUND = "ITEM_NOT_FOUND",
    COLUMN_NOT_FOUND = "COLUMN_NOT_FOUND",
    UNKNOWN = "UNKNOWN",
}

function getErrorKind(code: string, message: string): ErrorKind {
    switch (code) {
        case "-2130575338, System.ArgumentException": // Getting this item
        case "-2147024809, System.ArgumentException": // Getting an item's property/field
            if (message === "Item does not exist. It may have been deleted by another user.") {
                return ErrorKind.ITEM_NOT_FOUND;
            }
            if (message.startsWith("Column '")) {
                return ErrorKind.COLUMN_NOT_FOUND;
            }
            return ErrorKind.UNKNOWN;
        default:
            return ErrorKind.UNKNOWN;
    }
}

interface SPErrorResponse {
    "odata.error": {
        code: string;
        message: {
            lang: string;
            value: string;
        };
    };
}

export interface SPErrorInfo {
    readonly getting: string;
    readonly from: string;
}

export class SPError extends Error implements SPErrorInfo {
    readonly code: string;
    readonly getting: string;
    readonly from: string;
    readonly kind: ErrorKind;

    constructor(code: string, message: string, spErrorInfo: SPErrorInfo) {
        super(message);
        this.name = "SPError";
        this.code = code;
        this.getting = spErrorInfo.getting;
        this.from = spErrorInfo.from;
        this.kind = getErrorKind(this.code, this.message);
    }

    private static FromResponse(response: SPErrorResponse, info: SPErrorInfo): SPError {
        return new SPError(response["odata.error"].code, response["odata.error"].message.value, info);
    }

    public static HandleError<T extends Error>(error: T, info: SPErrorInfo, nullableKinds: ErrorKind[] = []): void {
        if (error instanceof SPError) {
            if (nullableKinds.includes(error.kind)) {
                return;
            }
            throw error;
        }
        if (error instanceof axios.AxiosError && error.response && error.response.data && error.response.data["odata.error"]) {
            const newError = SPError.FromResponse(error.response.data, info);
            if (nullableKinds.includes(newError.kind)) {
                return;
            }
            throw newError;
        }
        throw error;
    }

    public static ConvertError<T extends Error>(error: T, info: SPErrorInfo, ignoreKinds: ErrorKind[] = []): T | SPError | void {
        if (error instanceof SPError) {
            if (ignoreKinds.includes(error.kind)) {
                console.warn("Ignoring error", error);
                return;
            }
            return error;
        }
        if (error instanceof axios.AxiosError && error.response) {
            if (error.response.headers) {
                if (error.response.headers["x-azure-externalerror"] === "0x800705b4,DNSTimeout") {
                    // ...
                    // DNS Timeout: This is a temporary issue, so try again in a few minutes.
                }
            }
            if (error.response.data && error.response.data["odata.error"]) {
                const newError = SPError.FromResponse(error.response.data, info);
                if (ignoreKinds.includes(newError.kind)) {
                    console.warn("Ignoring error", newError);
                    return;
                }
                return newError;
            }
        }
        return error;
    }
}

// -2147023436: Bad Lock Arguments
// -2147018894: Shared Lock Exists - There is a shared lock on the file
// -2147018887: Exclusive Lock Exists - There is an exclusive lock on the file
// -2147024729: No Lock Exists - The file is not locked
// -2130575306: The file is already checked out for editing.
