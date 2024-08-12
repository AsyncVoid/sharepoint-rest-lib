export interface WebhookSubscriptionResponse {
    /** Unique identifier for the webhook subscription. */
    id: string;
    /** An optional string value that has been passed back to us */
    clientState?: string;
    /** Expiration of the webhook subscription */
    expirationDateTime: string;
    /** The URL to send the POST request to when the event is triggered. */
    notificationUrl: string;
    /** Unique identifier of the resource (list) where the subscription is registered. */
    resource: string;
    resourceData: null;
    scenarios: null;
}