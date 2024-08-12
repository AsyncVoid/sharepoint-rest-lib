import {Authenticator} from "./Authenticator.js";
import * as axios from "axios";
import {AccessTokenResponse} from "./AccessTokenResponse.js";

export class ClientSecretAuthenticator implements Authenticator {
    private readonly _tenant: string;
    private readonly _scope: string;
    private readonly _clientId: string;
    private readonly _clientSecret: string;
    private _token: string | null = null;
    private _tokenRenewal: number | null = null;

    private constructor(tenant: string, scope: string, clientId: string, clientSecret: string) {
        this._tenant = tenant;
        this._scope = scope;
        this._clientId = clientId;
        this._clientSecret = clientSecret;
    }

    private needsTokenRefresh(): boolean {
        if (!this._token || !this._tokenRenewal) {
            return true;
        }
        return Date.now() > this._tokenRenewal;
    }

    async getAccessToken(): Promise<string> {
        if (!this.needsTokenRefresh()) {
            return this._token!;
        }
        const response = await axios.default.post<AccessTokenResponse>(
            `https://login.microsoftonline.com/${this._tenant}/oauth2/v2.0/token`, {
                client_id: this._clientId,
                scope: this._scope,
                client_secret: this._clientSecret,
                grant_type: "client_credentials"
            });
        this._token = response.data.access_token;
        this._tokenRenewal = Date.now() + (response.data.expires_in * 1000) / 2;
        return this._token;
    }

    /**
     * Creates a new ClientSecretAuthenticator for the given tenant name, clientId and clientSecret
     * @param {string} tenantName The name of the tenant, e.g. "mytenant" where the tenant is mytenant.onmicrosoft.com
     * @param {string} clientId The client ID of the app registration
     * @param {string} clientSecret The client secret of the app registration
     * @returns {ClientSecretAuthenticator} A new ClientSecretAuthenticator
     */
    public static create(tenantName: string, clientId: string, clientSecret: string): ClientSecretAuthenticator {
        return new ClientSecretAuthenticator(`${tenantName}.onmicrosoft.com`, `https://${tenantName}.sharepoint.com/.default`, clientId, clientSecret);
    }

    /**
     * Creates a new ClientSecretAuthenticator for the given tenant, scope, clientId and clientSecret
     * @deprecated Use {@link create} instead
     * @param {string} tenant The tenant name, e.g. "mytenant.onmicrosoft.com"
     * @param {string} scope The scope of the token, e.g. "https://mytenant.sharepoint.com/.default"
     * @param {string} clientId The client ID of the app registration
     * @param {string} clientSecret The client secret of the app registration
     * @returns {Promise<ClientSecretAuthenticator>} A new ClientSecretAuthenticator
     */
    public static createExplicit(tenant: string, scope: string, clientId: string, clientSecret: string): ClientSecretAuthenticator {
        return new ClientSecretAuthenticator(tenant, scope, clientId, clientSecret);
    }
}