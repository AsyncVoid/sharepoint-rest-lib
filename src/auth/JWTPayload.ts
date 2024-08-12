export interface JWTPayload {
    /**
     * The audience for the token.
     * E.g. "https://graph.microsoft.com" ot "https://{tenant}.sharepoint.com"
     */
    aud: string,
    /**
     * The issuer of the token.
     * E.g. "https://sts.windows.net/{tenantid}/"
     */
    iss: string,
    /**
     * The time the token was issued
     */
    iat: number,
    /**
     * The time the token is valid from
     */
    nbf: number,
    /**
     * The expiration time of the token
     */
    exp: number,
    /**
     * Internal use by Microsoft for session management
     */
    aio: string,
    /**
     * The display name of the app used to acquire the token
     */
    app_displayname: string,
    /**
     * The application ID of the app used to acquire the token
     */
    appid: string,
    /**
     * Application Identifier Authentication Context Class Reference
     * 0: Public client (no credential, such as a client secret or certificate, was used)
     * 1: Client secret (confidential client authentication using a client secret)
     * 2: Certificate-based client assertion (client authentication using a client certificate)
     */
    appidacr: "0" | "1" | "2",
    /**
     * The identity provider that authenticated the subject of the token.
     * E.g. "https://sts.windows.net/{tenantid}/"
     */
    idp: string,
    /**
     * The type of token
     */
    idtyp: "app" | "user",
    /**
     * A unique identifier for the user in Azure AD. This is the principal ID.
     */
    oid: string,
    /**
     * A hash of the refresh token. This claim helps in detecting token reuse.
     */
    rh: string,
    /**
     * Lists the roles assigned to the user. This claim can be used to authorize the user based on their roles.
     * E.g. ["Sites.Manage.All", "Sites.Read.All"]
     */
    roles: string[],
    /**
     * The session ID
     */
    sid: string,
    /**
     * The subject of the token (to whom the token refers to)
     */
    sub: string,
    /**
     * The tenant ID
     */
    tid: string,
    /**
     * A unique identifier for the token, useful for debugging and tracking.
     */
    uti: string,
    /**
     * The version of the token
     */
    ver: "1.0" | "2.0",
    /**
     * Microsoft Identity Relationship; indicates relationships such as user delegation.
     * For example, a token issued to a user by an application on behalf of a user.
     */
    xms_idrel: string,
    /**
     * The unique identifier of the request
     */
    jti: string
}