import IUtils from "./IUtils";

export default class Utils implements IUtils {
    urlEncodeBase64(data: string): string {
        return data
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');

    }
    urlDecodeBase64(data: string): string {
        return data
            .replace(/-/g, "+")
            .replace(/_/g, "/");

    }
    base64AndUrlEncode(data: string): string {
        return this.urlEncodeBase64(btoa(data));
    }
    base64AndUrlDecode(data: string): string {
        return atob(this.urlDecodeBase64(data));
    }
}