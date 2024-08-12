[sharepoint](../README.md) / [Exports](../modules.md) / AbstractWebhookSubscription

# Class: AbstractWebhookSubscription\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`AbstractWebhookSubscription`**

  ↳↳ [`WebhookSubscription`](WebhookSubscription.md)

## Table of contents

### Constructors

- [constructor](AbstractWebhookSubscription.md#constructor)

### Properties

- [\_list](AbstractWebhookSubscription.md#_list)

### Accessors

- [baseUrl](AbstractWebhookSubscription.md#baseurl)

### Methods

- [delete](AbstractWebhookSubscription.md#delete)
- [deleteRequest](AbstractWebhookSubscription.md#deleterequest)
- [dontThrowFor](AbstractWebhookSubscription.md#dontthrowfor)
- [extend](AbstractWebhookSubscription.md#extend)
- [extendDate](AbstractWebhookSubscription.md#extenddate)
- [getAuth](AbstractWebhookSubscription.md#getauth)
- [getRequest](AbstractWebhookSubscription.md#getrequest)
- [patchRequest](AbstractWebhookSubscription.md#patchrequest)
- [postRequest](AbstractWebhookSubscription.md#postrequest)
- [putRequest](AbstractWebhookSubscription.md#putrequest)

## Constructors

### constructor

• **new AbstractWebhookSubscription**\<`T`\>(`list`): [`AbstractWebhookSubscription`](AbstractWebhookSubscription.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |

#### Returns

[`AbstractWebhookSubscription`](AbstractWebhookSubscription.md)\<`T`\>

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:11

## Properties

### \_list

• `Protected` `Readonly` **\_list**: `T`

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:9

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Inherited from

RequestSender.baseUrl

#### Defined in

src/RequestSender.ts:14

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

Deletes the subscription

#### Returns

`Promise`\<`void`\>

A promise that resolves when the subscription is deleted

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

[RequestSender](RequestSender.md).[deleteRequest](RequestSender.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Overrides

[RequestSender](RequestSender.md).[dontThrowFor](RequestSender.md#dontthrowfor)

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

#### Defined in

src/webhook/AbstractWebhookSubscription.ts:28

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

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

[RequestSender](RequestSender.md).[getRequest](RequestSender.md#getrequest)

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

[RequestSender](RequestSender.md).[patchRequest](RequestSender.md#patchrequest)

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

[RequestSender](RequestSender.md).[postRequest](RequestSender.md#postrequest)

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

[RequestSender](RequestSender.md).[putRequest](RequestSender.md#putrequest)

#### Defined in

src/RequestSender.ts:67
