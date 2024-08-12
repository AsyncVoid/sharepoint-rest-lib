import {ICrypto} from "./ICrypto";

export default class Crypto implements ICrypto {
    public async sign(data: string, privateKey: string): Promise<string> {
        const algorithm = {
            name: "RSASSA-PKCS1-v1_5", // Algorithm for signing
            hash: { name: "SHA-256" } // Hashing algorithm
        };

        const privKeyBase64 = privateKey.replaceAll(/(-----[A-Z\s]+-----|\r|\n)/g, "");
        const privateKeyData = Uint8Array.from(atob(privKeyBase64), c => c.charCodeAt(0));
        const key = await window.crypto.subtle.importKey(
            "pkcs8",
            privateKeyData,
            algorithm,
            false,
            ["sign"]
        );
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(data);
        const resultArrBuff = await window.crypto.subtle.sign(
            algorithm,
            key,
            encodedData,
        );
        return btoa(String.fromCharCode(...new Uint8Array(resultArrBuff)));
    }

    randomUUID(): string {
        return window.crypto.randomUUID();
    }
}