export interface Authenticator {
    /**
     * This is a function that will return a Bearer token.
     * This function is evaluated and sent with every request to the SharePoint API.
     * You can use this to provide a token that is valid for a certain time period.
     * And check if the token is still valid before returning it.
     * @returns {string} The Bearer token
     */
    getAccessToken(): Promise<string>
}