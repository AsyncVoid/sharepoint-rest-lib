[sharepoint](../README.md) / [Exports](../modules.md) / PartialListById

# Class: PartialListById

## Hierarchy

- [`AbstractList`](AbstractList.md)

  ↳ **`PartialListById`**

## Table of contents

### Constructors

- [constructor](PartialListById.md#constructor)

### Properties

- [\_id](PartialListById.md#_id)
- [\_site](PartialListById.md#_site)

### Accessors

- [baseUrl](PartialListById.md#baseurl)
- [id](PartialListById.md#id)
- [site](PartialListById.md#site)

### Methods

- [createChangeToken](PartialListById.md#createchangetoken)
- [deleteRequest](PartialListById.md#deleterequest)
- [dontThrowFor](PartialListById.md#dontthrowfor)
- [get](PartialListById.md#get)
- [getAuth](PartialListById.md#getauth)
- [getChanges](PartialListById.md#getchanges)
- [getItemById](PartialListById.md#getitembyid)
- [getItemByIdWithFileOrFolder](PartialListById.md#getitembyidwithfileorfolder)
- [getPartialItemById](PartialListById.md#getpartialitembyid)
- [getRequest](PartialListById.md#getrequest)
- [getSubscriptions](PartialListById.md#getsubscriptions)
- [patchRequest](PartialListById.md#patchrequest)
- [postRequest](PartialListById.md#postrequest)
- [putRequest](PartialListById.md#putrequest)
- [toJSON](PartialListById.md#tojson)

## Constructors

### constructor

• **new PartialListById**(`site`, `id`): [`PartialListById`](PartialListById.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `id` | `string` |

#### Returns

[`PartialListById`](PartialListById.md)

#### Overrides

[AbstractList](AbstractList.md).[constructor](AbstractList.md#constructor)

#### Defined in

src/list/PartialListById.ts:8

## Properties

### \_id

• `Private` `Readonly` **\_id**: `string`

#### Defined in

src/list/PartialListById.ts:6

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Inherited from

[AbstractList](AbstractList.md).[_site](AbstractList.md#_site)

#### Defined in

src/list/AbstractList.ts:11

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractList.baseUrl

#### Defined in

src/list/PartialListById.ts:13

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

src/list/PartialListById.ts:17

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractList.site

#### Defined in

src/list/AbstractList.ts:31

## Methods

### createChangeToken

▸ **createChangeToken**(`changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/list/PartialListById.ts:28

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

[AbstractList](AbstractList.md).[deleteRequest](AbstractList.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractList](AbstractList.md).[dontThrowFor](AbstractList.md#dontthrowfor)

#### Defined in

src/list/AbstractList.ts:18

___

### get

▸ **get**(): `Promise`\<[`List`](List.md)\>

#### Returns

`Promise`\<[`List`](List.md)\>

#### Inherited from

[AbstractList](AbstractList.md).[get](AbstractList.md#get)

#### Defined in

src/list/AbstractList.ts:26

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractList](AbstractList.md).[getAuth](AbstractList.md#getauth)

#### Defined in

src/list/AbstractList.ts:22

___

### getChanges

▸ **getChanges**(`changeTypes?`, `since?`): `Promise`\<[`ChangeList`](ChangeList.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `changeTypes` | [`ChangeQueryType`](../enums/ChangeQueryType.md)[] | `ALL_CHANGE_TYPES` |
| `since?` | [`ChangeToken`](ChangeToken.md) | `undefined` |

#### Returns

`Promise`\<[`ChangeList`](ChangeList.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getChanges](AbstractList.md#getchanges)

#### Defined in

src/list/AbstractList.ts:47

___

### getItemById

▸ **getItemById**(`id`): `Promise`\<[`ListItem`](ListItem.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemById](AbstractList.md#getitembyid)

#### Defined in

src/list/AbstractList.ts:39

___

### getItemByIdWithFileOrFolder

▸ **getItemByIdWithFileOrFolder**(`id`): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`PartialListById`](PartialListById.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemByIdWithFileOrFolder](AbstractList.md#getitembyidwithfileorfolder)

#### Defined in

src/list/AbstractList.ts:43

___

### getPartialItemById

▸ **getPartialItemById**(`id`): [`PartialListItemById`](PartialListItemById.md)\<[`PartialListById`](PartialListById.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<[`PartialListById`](PartialListById.md)\>

#### Inherited from

[AbstractList](AbstractList.md).[getPartialItemById](AbstractList.md#getpartialitembyid)

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

[AbstractList](AbstractList.md).[getRequest](AbstractList.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getSubscriptions

▸ **getSubscriptions**(): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListById`](PartialListById.md)\>[]\>

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListById`](PartialListById.md)\>[]\>

#### Inherited from

[AbstractList](AbstractList.md).[getSubscriptions](AbstractList.md#getsubscriptions)

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

[AbstractList](AbstractList.md).[patchRequest](AbstractList.md#patchrequest)

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

[AbstractList](AbstractList.md).[postRequest](AbstractList.md#postrequest)

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

[AbstractList](AbstractList.md).[putRequest](AbstractList.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Overrides

[AbstractList](AbstractList.md).[toJSON](AbstractList.md#tojson)

#### Defined in

src/list/PartialListById.ts:21
