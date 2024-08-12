[sharepoint](../README.md) / [Exports](../modules.md) / WebhookSubscription

# Class: WebhookSubscription\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Hierarchy

- [`AbstractWebhookSubscription`](AbstractWebhookSubscription.md)\<`T`\>

  ↳ **`WebhookSubscription`**

## Table of contents

### Constructors

- [constructor](WebhookSubscription.md#constructor)

### Properties

- [\_clientState](WebhookSubscription.md#_clientstate)
- [\_expirationDateTime](WebhookSubscription.md#_expirationdatetime)
- [\_id](WebhookSubscription.md#_id)
- [\_list](WebhookSubscription.md#_list)
- [\_notificationUrl](WebhookSubscription.md#_notificationurl)

### Accessors

- [baseUrl](WebhookSubscription.md#baseurl)
- [clientState](WebhookSubscription.md#clientstate)
- [expirationDateTime](WebhookSubscription.md#expirationdatetime)
- [id](WebhookSubscription.md#id)
- [notificationUrl](WebhookSubscription.md#notificationurl)

### Methods

- [delete](WebhookSubscription.md#delete)
- [deleteRequest](WebhookSubscription.md#deleterequest)
- [dontThrowFor](WebhookSubscription.md#dontthrowfor)
- [extend](WebhookSubscription.md#extend)
- [extendDate](WebhookSubscription.md#extenddate)
- [getAuth](WebhookSubscription.md#getauth)
- [getRequest](WebhookSubscription.md#getrequest)
- [patchRequest](WebhookSubscription.md#patchrequest)
- [postRequest](WebhookSubscription.md#postrequest)
- [putRequest](WebhookSubscription.md#putrequest)
- [FromResponse](WebhookSubscription.md#fromresponse)
- [FromResponseWithSite](WebhookSubscription.md#fromresponsewithsite)

## Constructors

### constructor

• **new WebhookSubscription**\<`T`\>(`list`, `id`, `expirationDateTime`, `notificationUrl`, `clientState?`): [`WebhookSubscription`](WebhookSubscription.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `id` | `string` |
| `expirationDateTime` | `string` |
| `notificationUrl` | `string` |
| `clientState?` | `string` |

#### Returns

[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>

#### Overrides

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[constructor](AbstractWebhookSubscription.md#constructor)

#### Defined in

src/webhook/WebhookSubscription.ts:13

## Properties

### \_clientState

• `Private` `Optional` `Readonly` **\_clientState**: `string`

#### Defined in

src/webhook/WebhookSubscription.ts:9

___

### \_expirationDateTime

• `Private` `Readonly` **\_expirationDateTime**: `Date`

#### Defined in

src/webhook/WebhookSubscription.ts:10

___

### \_id

• `Private` `Readonly` **\_id**: `string`

#### Defined in

src/webhook/WebhookSubscription.ts:8

___

### \_list

• `Protected` `Readonly` **\_list**: `T`

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[_list](AbstractWebhookSubscription.md#_list)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:9

___

### \_notificationUrl

• `Private` `Readonly` **\_notificationUrl**: `string`

#### Defined in

src/webhook/WebhookSubscription.ts:11

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractWebhookSubscription.baseUrl

#### Defined in

src/webhook/WebhookSubscription.ts:21

___

### clientState

• `get` **clientState**(): `string`

#### Returns

`string`

#### Defined in

src/webhook/WebhookSubscription.ts:29

___

### expirationDateTime

• `get` **expirationDateTime**(): `Date`

#### Returns

`Date`

#### Defined in

src/webhook/WebhookSubscription.ts:33

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

src/webhook/WebhookSubscription.ts:25

___

### notificationUrl

• `get` **notificationUrl**(): `string`

#### Returns

`string`

#### Defined in

src/webhook/WebhookSubscription.ts:37

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

Deletes the subscription

#### Returns

`Promise`\<`void`\>

A promise that resolves when the subscription is deleted

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[delete](AbstractWebhookSubscription.md#delete)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:36

___

### deleteRequest

▸ **deleteRequest**\<`T`\>(`url`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[deleteRequest](AbstractWebhookSubscription.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[dontThrowFor](AbstractWebhookSubscription.md#dontthrowfor)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:40

___

### extend

▸ **extend**(`expirationDateTime`): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

Extends the expiration date of the subscription to the specified date and time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expirationDateTime` | `string` | The new expiration date and time for the subscription. |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

The updated subscription

**`Example`**

```ts
subscription.extend("2021-12-31T23:59:59Z")
```

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[extend](AbstractWebhookSubscription.md#extend)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:23

___

### extendDate

▸ **extendDate**(`expirationDateTime`): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expirationDateTime` | `Date` |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[extendDate](AbstractWebhookSubscription.md#extenddate)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:28

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[getAuth](AbstractWebhookSubscription.md#getauth)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:44

___

### getRequest

▸ **getRequest**\<`T`\>(`url`, `config?`): `Promise`\<`T`\>

Performs a GET request to the specified url

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | The type of the response |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url to perform the request to |
| `config?` | `AxiosRequestConfig`\<`any`\> | The config for the request |

#### Returns

`Promise`\<`T`\>

The response data, null if sharepoint says its null, or undefined if an error occurred and was handled.

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[getRequest](AbstractWebhookSubscription.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### patchRequest

▸ **patchRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[patchRequest](AbstractWebhookSubscription.md#patchrequest)

#### Defined in

src/RequestSender.ts:71

___

### postRequest

▸ **postRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[postRequest](AbstractWebhookSubscription.md#postrequest)

#### Defined in

src/RequestSender.ts:63

___

### putRequest

▸ **putRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractWebhookSubscription](AbstractWebhookSubscription.md).[putRequest](AbstractWebhookSubscription.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### FromResponse

▸ **FromResponse**\<`T`\>(`list`, `response`): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `response` | [`WebhookSubscriptionResponse`](../interfaces/WebhookSubscriptionResponse.md) |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

#### Defined in

src/webhook/WebhookSubscription.ts:41

___

### FromResponseWithSite

▸ **FromResponseWithSite**(`site`, `response`): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `response` | [`WebhookSubscriptionResponse`](../interfaces/WebhookSubscriptionResponse.md) |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Defined in

src/webhook/WebhookSubscription.ts:45
