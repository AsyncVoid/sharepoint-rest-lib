export interface SiteInfo {
    readonly name: string;
    readonly url: string;
    readonly tenant: string;
    readonly id?: string;
}

const REGEX = new RegExp("^https?://([^.]+).sharepoint.com/sites/([^/?]+)", "");

export class SiteInfoBuilder {
    private _name?: string;
    private _url?: string;
    private _tenant?: string;
    private _id?: string;

    constructor() {
    }

    name(name: string): SiteInfoBuilder {
        this._name = name;
        return this;
    }

    url(url: string): SiteInfoBuilder {
        this._url = url;
        return this;
    }

    tenant(tenant: string): SiteInfoBuilder {
        this._tenant = tenant;
        return this;
    }

    id(id: string): SiteInfoBuilder {
        this._id = id;
        return this;
    }

    build(): SiteInfo {
        const fromUrl = this._url && (!this._name || !this._tenant) && SiteInfoBuilder.fromUrl(this._url);

        const name = this._name ?? fromUrl.name;
        const tenant = this._tenant ?? fromUrl.tenant;
        const url = this._url ?? `https://${tenant}.sharepoint.com/sites/${name.replace(" ", "")}`;
        const id = this._id;

        if (!name || !tenant || !url) {
            throw new Error(`Site info cannot be created from information provided {name: "${this._name}", tenant: "${this._tenant}", url: "${this._url}"}`);
        }

        return {name, tenant, url, id};
    }

    static fromUrl(sharepointUrl: string): SiteInfo {
        const result = REGEX.exec(sharepointUrl);

        if (!result || result.length < 3) {
            throw new Error(`Invalid url when parsing site info: "${sharepointUrl}`);
        }

        const name = result[2];
        const url = result[0];
        const tenant = result[1];

        return {name, url, tenant};
    }
}