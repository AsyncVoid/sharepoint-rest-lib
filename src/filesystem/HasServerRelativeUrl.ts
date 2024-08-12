export function hasServerRelativeUrl(object: any): object is HasServerRelativeUrl {
    return (<HasServerRelativeUrl>object).serverRelativeUrl !== undefined;
}

export interface HasServerRelativeUrl {
    get serverRelativeUrl(): string;
}