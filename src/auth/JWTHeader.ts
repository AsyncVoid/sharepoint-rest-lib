export interface JWTHeader {
    /**
     * The type of token
     */
    typ: "JWT",
    /**
     * Unique identifier for the token
     */
    nonce: string,
    /**
     * The algorithm used to sign or encrypt the token
     */
    alg: "RS256" | "HS256",
    /**
     * X.509 certificate fingerprint
     */
    x5t: string,
    /**
     * The key identifier
     */
    kid: string
}