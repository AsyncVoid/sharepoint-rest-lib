import {Authenticator} from "./Authenticator.js";
import * as axios from "axios";
import {AccessTokenResponse} from "./AccessTokenResponse.js";
import {JWTHeader} from "./JWTHeader.js";
import {JWTPayload} from "./JWTPayload.js";
import Utils from "./UtilsNode.js";
import Crypto from "./CryptoNode.js";

const crypto = new Crypto();
const utils = new Utils();

export class CertificateAuthenticator implements Authenticator {
    private readonly _tenant: string;
    private readonly _scope: string;
    private readonly _clientId: string;
    private readonly _privateKey: string;
    private readonly _publicKeyHash: string;
    private _token: string | null = null;
    private _tokenRenewal: number | null = null;

    private constructor(tenant: string, scope: string, clientId: string, privateKey: string, publicKeyHash: string) {
        this._tenant = tenant;
        this._scope = scope;
        this._clientId = clientId;
        this._privateKey = privateKey;
        this._publicKeyHash = publicKeyHash;
    }

    private needsTokenRefresh(): boolean {
        if (!this._token || !this._tokenRenewal) {
            return true;
        }
        return Date.now() > this._tokenRenewal;
    }

    private static async createJWT(header: JWTHeader, payload: JWTPayload, privateKey: string): Promise<string> {
        // Encode the header and payload
        const encodedHeader = utils.base64AndUrlEncode(JSON.stringify(header));
        const encodedPayload = utils.base64AndUrlEncode(JSON.stringify(payload));

        // Create the signature input
        const signatureInput = `${encodedHeader}.${encodedPayload}`;

        const signature = utils.urlEncodeBase64(await crypto.sign(signatureInput, privateKey));

        // Concatenate the header, payload, and signature
        return `${signatureInput}.${signature}`;
    }

    async getAccessToken(): Promise<string> {
        if (!this.needsTokenRefresh()) {
            return this._token!;
        }

        const header: JWTHeader = {
            alg: "RS256",
            typ: "JWT",
            x5t: this._publicKeyHash
        } as Partial<JWTHeader> as JWTHeader;

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);

        const endpoint = `https://login.microsoftonline.com/${this._tenant}/oauth2/v2.0/token`;

        const payload: JWTPayload = {
            aud: endpoint,
            exp: currentTimeInSeconds + (60 * 60), // 1 hour expiration
            iat: currentTimeInSeconds,
            iss: this._clientId,
            jti: crypto.randomUUID(),
            nbf: currentTimeInSeconds, // Not before now
            sub: this._clientId,
        } as Partial<JWTPayload> as JWTPayload;

        const jwt = await CertificateAuthenticator.createJWT(header, payload, this._privateKey);

        const response = await axios.default.postForm<AccessTokenResponse>(endpoint, {
                client_id: this._clientId,
                grant_type: "client_credentials",
                scope: this._scope,
                client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
                client_assertion: jwt
            });

        this._token = response.data.access_token;
        this._tokenRenewal = Date.now() + (response.data.expires_in * 1000) / 2;
        return this._token;
    }

    /**
     * Creates a new CertificateAuthenticator for the given tenant name, clientId and clientSecret
     * @param {string} tenantName The name of the tenant, e.g. "mytenant" where the tenant is mytenant.onmicrosoft.com
     * @param {string} clientId The client ID of the app registration
     * @param {string} privateKey The private key of the app registration e.g. "-----BEGIN PRIVATE KEY-----\nMIIEv..."
     * @param {string} publicKeyHash The hash of the public key of the app registration
     * @returns {CertificateAuthenticator} A new CertificateAuthenticator
     */
    public static create(tenantName: string, clientId: string, privateKey: string, publicKeyHash: string): CertificateAuthenticator {
        return new CertificateAuthenticator(`${tenantName}.onmicrosoft.com`, `https://${tenantName}.sharepoint.com/.default`, clientId, privateKey, publicKeyHash);
    }

    /**
     * Creates a new CertificateAuthenticator for the given tenant, scope, clientId and clientSecret
     * @deprecated Use {@link create} instead
     * @param {string} tenant The tenant, e.g. "mytenant.onmicrosoft.com"
     * @param {string} scope The scope of the token, e.g. "https://mytenant.sharepoint.com/.default"
     * @param {string} clientId The client ID of the app registration
     * @param {string} privateKey The private key of the app registration e.g. "-----BEGIN PRIVATE KEY-----\nMIIEv..."
     * @param {string} publicKeyHash The hash of the public key of the app registration
     * @returns {CertificateAuthenticator} A new CertificateAuthenticator
     */
    public static createExplicit(tenant: string, scope: string, clientId: string, privateKey: string, publicKeyHash: string): CertificateAuthenticator {
        return new CertificateAuthenticator(tenant, scope, clientId, privateKey, publicKeyHash);
    }
}