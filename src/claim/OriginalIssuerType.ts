export enum OriginalIssuerType {
    Unknown = "\0",
    ClaimProvider = "c",
    Forms = "f",
    SecurityTokenService = "s", // SAML
    TrustedProvider = "t",
    Windows = "w",
    ApplicationPrincipal = "x", // OAuth
    Anonymous = "y"
}

export const OriginalIssuerTypeNames = {
    [OriginalIssuerType.Unknown]: "Unknown",
    [OriginalIssuerType.ClaimProvider]: "ClaimProvider",
    [OriginalIssuerType.Forms]: "Forms",
    [OriginalIssuerType.SecurityTokenService]: "SecurityTokenService",
    [OriginalIssuerType.TrustedProvider]: "TrustedProvider",
    [OriginalIssuerType.Windows]: "Windows",
    [OriginalIssuerType.ApplicationPrincipal]: "ApplicationPrincipal",
    [OriginalIssuerType.Anonymous]: "Anonymous",
}