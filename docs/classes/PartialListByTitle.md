[sharepoint](../README.md) / [Exports](../modules.md) / PartialListByTitle

# Class: PartialListByTitle

## Hierarchy

- [`AbstractList`](AbstractList.md)

  ↳ **`PartialListByTitle`**

## Table of contents

### Constructors

- [constructor](PartialListByTitle.md#constructor)

### Properties

- [\_site](PartialListByTitle.md#_site)
- [\_title](PartialListByTitle.md#_title)

### Accessors

- [baseUrl](PartialListByTitle.md#baseurl)
- [site](PartialListByTitle.md#site)
- [title](PartialListByTitle.md#title)

### Methods

- [deleteRequest](PartialListByTitle.md#deleterequest)
- [dontThrowFor](PartialListByTitle.md#dontthrowfor)
- [get](PartialListByTitle.md#get)
- [getAuth](PartialListByTitle.md#getauth)
- [getChanges](PartialListByTitle.md#getchanges)
- [getItemById](PartialListByTitle.md#getitembyid)
- [getItemByIdWithFileOrFolder](PartialListByTitle.md#getitembyidwithfileorfolder)
- [getPartialItemById](PartialListByTitle.md#getpartialitembyid)
- [getRequest](PartialListByTitle.md#getrequest)
- [getSubscriptions](PartialListByTitle.md#getsubscriptions)
- [patchRequest](PartialListByTitle.md#patchrequest)
- [postRequest](PartialListByTitle.md#postrequest)
- [putRequest](PartialListByTitle.md#putrequest)
- [toJSON](PartialListByTitle.md#tojson)

## Constructors

### constructor

• **new PartialListByTitle**(`site`, `title`): [`PartialListByTitle`](PartialListByTitle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `title` | `string` |

#### Returns

[`PartialListByTitle`](PartialListByTitle.md)

#### Overrides

[AbstractList](AbstractList.md).[constructor](AbstractList.md#constructor)

#### Defined in

src/list/PartialListByTitle.ts:7

## Properties

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Inherited from

[AbstractList](AbstractList.md).[_site](AbstractList.md#_site)

#### Defined in

src/list/AbstractList.ts:11

___

### \_title

• `Private` `Readonly` **\_title**: `string`

#### Defined in

src/list/PartialListByTitle.ts:5

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractList.baseUrl

#### Defined in

src/list/PartialListByTitle.ts:12

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractList.site

#### Defined in

src/list/AbstractList.ts:31

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Defined in

src/list/PartialListByTitle.ts:16

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

▸ **getChanges**(`changeTypes?`, `since?`): `Promise`\<[`ChangeList`](ChangeList.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `changeTypes` | [`ChangeQueryType`](../enums/ChangeQueryType.md)[] | `ALL_CHANGE_TYPES` |
| `since?` | [`ChangeToken`](ChangeToken.md) | `undefined` |

#### Returns

`Promise`\<[`ChangeList`](ChangeList.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getChanges](AbstractList.md#getchanges)

#### Defined in

src/list/AbstractList.ts:47

___

### getItemById

▸ **getItemById**(`id`): `Promise`\<[`ListItem`](ListItem.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemById](AbstractList.md#getitembyid)

#### Defined in

src/list/AbstractList.ts:39

___

### getItemByIdWithFileOrFolder

▸ **getItemByIdWithFileOrFolder**(`id`): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemByIdWithFileOrFolder](AbstractList.md#getitembyidwithfileorfolder)

#### Defined in

src/list/AbstractList.ts:43

___

### getPartialItemById

▸ **getPartialItemById**(`id`): [`PartialListItemById`](PartialListItemById.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>

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

▸ **getSubscriptions**(): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>[]\>

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`PartialListByTitle`](PartialListByTitle.md)\>[]\>

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

src/list/PartialListByTitle.ts:20
