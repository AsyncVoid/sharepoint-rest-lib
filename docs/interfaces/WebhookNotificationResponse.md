[sharepoint](../README.md) / [Exports](../modules.md) / WebhookNotificationResponse

# Interface: WebhookNotificationResponse

## Table of contents

### Properties

- [clientState](WebhookNotificationResponse.md#clientstate)
- [expirationDateTime](WebhookNotificationResponse.md#expirationdatetime)
- [resource](WebhookNotificationResponse.md#resource)
- [siteUrl](WebhookNotificationResponse.md#siteurl)
- [subscriptionId](WebhookNotificationResponse.md#subscriptionid)
- [tenantId](WebhookNotificationResponse.md#tenantid)
- [webId](WebhookNotificationResponse.md#webid)

## Properties

### clientState

• `Optional` **clientState**: `string`

An optional string value that has been passed back to us

#### Defined in

src/webhook/WebhookNotification.ts:5

___

### expirationDateTime

• **expirationDateTime**: `string`

Expiration of the webhook subscription

#### Defined in

src/webhook/WebhookNotification.ts:7

___

### resource

• **resource**: `string`

Unique identifier of the resource (list) where the subscription is registered.

#### Defined in

src/webhook/WebhookNotification.ts:9

___

### siteUrl

• **siteUrl**: `string`

Server relative URL of the site where the subscription is registered.

#### Defined in

src/webhook/WebhookNotification.ts:13

___

### subscriptionId

• **subscriptionId**: `string`

Unique identifier for the webhook subscription.

#### Defined in

src/webhook/WebhookNotification.ts:3

___

### tenantId

• **tenantId**: `string`

Unique identifier for the tenant that generated this notification.

#### Defined in

src/webhook/WebhookNotification.ts:11

___

### webId

• **webId**: `string`

Unique identifier of the web where the subscription is registered.

#### Defined in

src/webhook/WebhookNotification.ts:15
