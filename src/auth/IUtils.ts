export default interface IUtils {
    urlEncodeBase64(data: string): string;
    urlDecodeBase64(data: string): string;
    base64AndUrlEncode(data: string): string;
    base64AndUrlDecode(data: string): string;
}