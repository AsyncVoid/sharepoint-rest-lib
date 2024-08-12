import {createSign, randomUUID} from "node:crypto";
import {ICrypto} from "./ICrypto";

export default class Crypto implements ICrypto {
    public async sign(data: string, privateKey: string): Promise<string> {
        const sign = createSign('RSA-SHA256');
        sign.update(data);
        sign.end();
        return sign.sign(privateKey, 'base64');
    }

    randomUUID(): string {
        return randomUUID();
    }
}