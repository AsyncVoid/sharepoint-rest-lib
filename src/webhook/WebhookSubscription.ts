import {Site} from "../Site.js";
import {AbstractWebhookSubscription} from "./AbstractWebhookSubscription.js";
import {WebhookSubscriptionResponse} from "./WebhookSubscriptionResponse.js";
import {PartialListById} from "../list/index.js";
import {AbstractList} from "../list/AbstractList.js";

export class WebhookSubscription<T extends AbstractList> extends AbstractWebhookSubscription<T> {

    private readonly _id: string;
    private readonly _clientState?: string;
    private readonly _expirationDateTime: Date;
    private readonly _notificationUrl: string;

    constructor(list: T, id: string, expirationDateTime: string, notificationUrl: string, clientState?: string) {
        super(list);
        this._id = id;
        this._clientState = clientState;
        this._expirationDateTime = new Date(expirationDateTime);
        this._notificationUrl = notificationUrl;
    }

    get baseUrl(): string {
        return `${this._list.baseUrl}/subscriptions('${this._id}')`;
    }

    get id(): string {
        return this._id;
    }

    get clientState(): string {
        return this._clientState;
    }

    get expirationDateTime(): Date {
        return this._expirationDateTime;
    }

    get notificationUrl(): string {
        return this._notificationUrl;
    }

    public static async FromResponse<T extends AbstractList>(list: T, response: WebhookSubscriptionResponse): Promise<WebhookSubscription<T>> {
        return new WebhookSubscription(list, response.id, response.expirationDateTime, response.notificationUrl, response.clientState);
    }

    public static async FromResponseWithSite(site: Site, response: WebhookSubscriptionResponse): Promise<WebhookSubscription<PartialListById>> {
        const list = site.getPartialListById(response.resource);
        return new WebhookSubscription(list, response.id, response.expirationDateTime, response.notificationUrl, response.clientState);
    }


}