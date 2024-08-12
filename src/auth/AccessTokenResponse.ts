export interface AccessTokenResponse {
    /**
     * The type of the token, e.g. "Bearer"
     */
    token_type: "Bearer" | string;
    /**
     * The number of seconds until the access token expires
     */
    expires_in: number;
    /**
     * The extended expiration time in seconds.
     * Indicates the additional time after the primary expiration time during which the token might still be accepted by some services.
     */
    ext_expires_in: number;
    /**
     * The access token to use for authentication
     */
    access_token: string;
}