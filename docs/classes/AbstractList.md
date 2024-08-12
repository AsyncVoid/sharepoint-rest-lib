[sharepoint](../README.md) / [Exports](../modules.md) / AbstractList

# Class: AbstractList

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`AbstractList`**

  ↳↳ [`List`](List.md)

  ↳↳ [`PartialListById`](PartialListById.md)

  ↳↳ [`PartialListByTitle`](PartialListByTitle.md)

## Table of contents

### Constructors

- [constructor](AbstractList.md#constructor)

### Properties

- [\_site](AbstractList.md#_site)

### Accessors

- [baseUrl](AbstractList.md#baseurl)
- [site](AbstractList.md#site)

### Methods

- [deleteRequest](AbstractList.md#deleterequest)
- [dontThrowFor](AbstractList.md#dontthrowfor)
- [get](AbstractList.md#get)
- [getAuth](AbstractList.md#getauth)
- [getChanges](AbstractList.md#getchanges)
- [getItemById](AbstractList.md#getitembyid)
- [getItemByIdWithFileOrFolder](AbstractList.md#getitembyidwithfileorfolder)
- [getPartialItemById](AbstractList.md#getpartialitembyid)
- [getRequest](AbstractList.md#getrequest)
- [getSubscriptions](AbstractList.md#getsubscriptions)
- [patchRequest](AbstractList.md#patchrequest)
- [postRequest](AbstractList.md#postrequest)
- [putRequest](AbstractList.md#putrequest)
- [toJSON](AbstractList.md#tojson)

## Constructors

### constructor

• **new AbstractList**(`site`): [`AbstractList`](AbstractList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |

#### Returns

[`AbstractList`](AbstractList.md)

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/list/AbstractList.ts:13

## Properties

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Defined in

src/list/AbstractList.ts:11

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Inherited from

RequestSender.baseUrl

#### Defined in

src/RequestSender.ts:14

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Defined in

src/list/AbstractList.ts:31

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

src/list/AbstractList.ts:18

___

### get

▸ **get**(): `Promise`\<[`List`](List.md)\>

#### Returns

`Promise`\<[`List`](List.md)\>

#### Defined in

src/list/AbstractList.ts:26

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

#### Defined in

src/list/AbstractList.ts:22

___

### getChanges

▸ **getChanges**(`changeTypes?`, `since?`): `Promise`\<[`ChangeList`](ChangeList.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `changeTypes` | [`ChangeQueryType`](../enums/ChangeQueryType.md)[] | `ALL_CHANGE_TYPES` |
| `since?` | [`ChangeToken`](ChangeToken.md) | `undefined` |

#### Returns

`Promise`\<[`ChangeList`](ChangeList.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Defined in

src/list/AbstractList.ts:47

___

### getItemById

▸ **getItemById**(`id`): `Promise`\<[`ListItem`](ListItem.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Defined in

src/list/AbstractList.ts:39

___

### getItemByIdWithFileOrFolder

▸ **getItemByIdWithFileOrFolder**(`id`): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`AbstractList`](AbstractList.md)\>\>

#### Defined in

src/list/AbstractList.ts:43

___

### getPartialItemById

▸ **getPartialItemById**(`id`): [`PartialListItemById`](PartialListItemById.md)\<[`AbstractList`](AbstractList.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<[`AbstractList`](AbstractList.md)\>

#### Defined in

src/list/AbstractList.ts:35

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

### getSubscriptions

▸ **getSubscriptions**(): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`AbstractList`](AbstractList.md)\>[]\>

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`AbstractList`](AbstractList.md)\>[]\>

#### Defined in

src/list/AbstractList.ts:65

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

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/list/AbstractList.ts:70
