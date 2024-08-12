import {RequestSender} from "../RequestSender.js";
import {ErrorKind} from "../SPError.js";
import {WebhookSubscription} from "./WebhookSubscription.js";
import {WebhookSubscriptionResponse} from "./WebhookSubscriptionResponse.js";
import {AbstractList} from "../list/AbstractList.js";

export abstract class AbstractWebhookSubscription<T extends AbstractList> extends RequestSender {

    protected readonly _list: T;

    protected constructor(list: T) {
        super();
        this._list = list;
    }

    /**
     * Extends the expiration date of the subscription to the specified date and time.
     * @template T The type of the list that the subscription is for
     * @param {string} expirationDateTime The new expiration date and time for the subscription.
     * @returns {Promise<WebhookSubscription<T>>} The updated subscription
     * @example subscription.extend("2021-12-31T23:59:59Z")
     */
    public async extend(expirationDateTime: string): Promise<WebhookSubscription<T>> {
        const withNewDate = await this.patchRequest<WebhookSubscriptionResponse>("", {expirationDateTime});
        return WebhookSubscription.FromResponse(this._list, withNewDate);
    }

    public async extendDate(expirationDateTime: Date): Promise<WebhookSubscription<T>> {
        return this.extend(expirationDateTime.toISOString());
    }

    /**
     * Deletes the subscription
     * @returns {Promise<void>} A promise that resolves when the subscription is deleted
     */
    public async delete(): Promise<void> {
        return this.deleteRequest("");
    }

    protected dontThrowFor(): ErrorKind[] {
        return [];
    }

    protected getAuth(): Promise<string> {
        return this._list.getAuth();
    }

}
