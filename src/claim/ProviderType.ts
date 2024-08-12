export enum ProviderType {
    Identity = "i",
    Email = "e",
    GroupOrRoleOrCustom = "c",
}

export const ProviderTypeNames = {
    [ProviderType.Identity]: "Identity",
    [ProviderType.Email]: "Email",
    [ProviderType.GroupOrRoleOrCustom]: "GroupOrRoleOrCustom",
}