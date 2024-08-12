[sharepoint](../README.md) / [Exports](../modules.md) / WebhookSubscriptionResponse

# Interface: WebhookSubscriptionResponse

## Table of contents

### Properties

- [clientState](WebhookSubscriptionResponse.md#clientstate)
- [expirationDateTime](WebhookSubscriptionResponse.md#expirationdatetime)
- [id](WebhookSubscriptionResponse.md#id)
- [notificationUrl](WebhookSubscriptionResponse.md#notificationurl)
- [resource](WebhookSubscriptionResponse.md#resource)
- [resourceData](WebhookSubscriptionResponse.md#resourcedata)
- [scenarios](WebhookSubscriptionResponse.md#scenarios)

## Properties

### clientState

• `Optional` **clientState**: `string`

An optional string value that has been passed back to us

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:5

___

### expirationDateTime

• **expirationDateTime**: `string`

Expiration of the webhook subscription

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:7

___

### id

• **id**: `string`

Unique identifier for the webhook subscription.

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:3

___

### notificationUrl

• **notificationUrl**: `string`

The URL to send the POST request to when the event is triggered.

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:9

___

### resource

• **resource**: `string`

Unique identifier of the resource (list) where the subscription is registered.

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:11

___

### resourceData

• **resourceData**: ``null``

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:12

___

### scenarios

• **scenarios**: ``null``

#### Defined in

src/webhook/WebhookSubscriptionResponse.ts:13
