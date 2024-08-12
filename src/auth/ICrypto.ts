export interface ICrypto {
    sign(data: string, privateKey: string): Promise<string>;
    randomUUID(): string;
}