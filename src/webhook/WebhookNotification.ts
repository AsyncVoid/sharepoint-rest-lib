export interface WebhookNotificationResponse {
    /** Unique identifier for the webhook subscription. */
    subscriptionId: string;
    /** An optional string value that has been passed back to us */
    clientState?: string;
    /** Expiration of the webhook subscription */
    expirationDateTime: string;
    /** Unique identifier of the resource (list) where the subscription is registered. */
    resource: string;
    /** Unique identifier for the tenant that generated this notification. */
    tenantId: string;
    /** Server relative URL of the site where the subscription is registered. */
    siteUrl: string;
    /** Unique identifier of the web where the subscription is registered. */
    webId: string;
}
