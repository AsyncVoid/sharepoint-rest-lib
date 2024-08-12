[sharepoint](../README.md) / [Exports](../modules.md) / RequestSender

# Class: RequestSender

## Hierarchy

- **`RequestSender`**

  ↳ [`AbstractFile`](AbstractFile.md)

  ↳ [`AbstractFolder`](AbstractFolder.md)

  ↳ [`AbstractListItem`](AbstractListItem.md)

  ↳ [`AbstractList`](AbstractList.md)

  ↳ [`AbstractWebhookSubscription`](AbstractWebhookSubscription.md)

  ↳ [`Site`](Site.md)

  ↳ [`Tenant`](Tenant.md)

## Table of contents

### Constructors

- [constructor](RequestSender.md#constructor)

### Accessors

- [baseUrl](RequestSender.md#baseurl)

### Methods

- [deleteRequest](RequestSender.md#deleterequest)
- [dontThrowFor](RequestSender.md#dontthrowfor)
- [getAuth](RequestSender.md#getauth)
- [getConfig](RequestSender.md#getconfig)
- [getRequest](RequestSender.md#getrequest)
- [handleResponse](RequestSender.md#handleresponse)
- [patchRequest](RequestSender.md#patchrequest)
- [postRequest](RequestSender.md#postrequest)
- [putRequest](RequestSender.md#putrequest)

## Constructors

### constructor

• **new RequestSender**(): [`RequestSender`](RequestSender.md)

#### Returns

[`RequestSender`](RequestSender.md)

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Defined in

src/RequestSender.ts:14

## Methods

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

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Defined in

src/RequestSender.ts:12

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

src/RequestSender.ts:13

___

### getConfig

▸ **getConfig**\<`D`\>(`config?`): `Promise`\<`AxiosRequestConfig`\<`D`\>\>

#### Type parameters

| Name |
| :------ |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`AxiosRequestConfig`\<`D`\>\>

#### Defined in

src/RequestSender.ts:16

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

#### Defined in

src/RequestSender.ts:59

___

### handleResponse

▸ **handleResponse**\<`T`\>(`response`, `url`): `Promise`\<`T`\>

Handles the response from the server, converting it to a SPError if it is an error response

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the response |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `Promise`\<`AxiosResponse`\<`T`, `any`\>\> | The promise of the response from the server to handle |
| `url` | `string` | The url that was requested |

#### Returns

`Promise`\<`T`\>

The response data, null if sharepoint says its null, or undefined if an error occurred and was handled.

**`Throws`**

If the response is an error response and the error is not handled

#### Defined in

src/RequestSender.ts:36

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

#### Defined in

src/RequestSender.ts:67
