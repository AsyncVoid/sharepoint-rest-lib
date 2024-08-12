[sharepoint](../README.md) / [Exports](../modules.md) / PartialListItemById

# Class: PartialListItemById\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Hierarchy

- [`AbstractListItem`](AbstractListItem.md)\<`T`\>

  ↳ **`PartialListItemById`**

## Table of contents

### Constructors

- [constructor](PartialListItemById.md#constructor)

### Properties

- [\_id](PartialListItemById.md#_id)
- [\_list](PartialListItemById.md#_list)

### Accessors

- [baseUrl](PartialListItemById.md#baseurl)
- [id](PartialListItemById.md#id)
- [list](PartialListItemById.md#list)

### Methods

- [deleteRequest](PartialListItemById.md#deleterequest)
- [dontThrowFor](PartialListItemById.md#dontthrowfor)
- [get](PartialListItemById.md#get)
- [getAttachmentFiles](PartialListItemById.md#getattachmentfiles)
- [getAuth](PartialListItemById.md#getauth)
- [getAuthor](PartialListItemById.md#getauthor)
- [getCheckoutUser](PartialListItemById.md#getcheckoutuser)
- [getContentType](PartialListItemById.md#getcontenttype)
- [getEditor](PartialListItemById.md#geteditor)
- [getFile](PartialListItemById.md#getfile)
- [getFolder](PartialListItemById.md#getfolder)
- [getRequest](PartialListItemById.md#getrequest)
- [getWithAuthor](PartialListItemById.md#getwithauthor)
- [getWithFileOrFolder](PartialListItemById.md#getwithfileorfolder)
- [patchRequest](PartialListItemById.md#patchrequest)
- [postRequest](PartialListItemById.md#postrequest)
- [putRequest](PartialListItemById.md#putrequest)
- [toJSON](PartialListItemById.md#tojson)

## Constructors

### constructor

• **new PartialListItemById**\<`T`\>(`list`, `id`): [`PartialListItemById`](PartialListItemById.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `id` | `number` |

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<`T`\>

#### Overrides

[AbstractListItem](AbstractListItem.md).[constructor](AbstractListItem.md#constructor)

#### Defined in

src/list/ListItem.ts:328

## Properties

### \_id

• `Private` `Readonly` **\_id**: `number`

#### Defined in

src/list/ListItem.ts:326

___

### \_list

• `Protected` `Readonly` **\_list**: `T`

#### Inherited from

[AbstractListItem](AbstractListItem.md).[_list](AbstractListItem.md#_list)

#### Defined in

src/list/ListItem.ts:67

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractListItem.baseUrl

#### Defined in

src/list/ListItem.ts:333

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

src/list/ListItem.ts:337

___

### list

• `get` **list**(): `T`

#### Returns

`T`

#### Inherited from

AbstractListItem.list

#### Defined in

src/list/ListItem.ts:82

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

[AbstractListItem](AbstractListItem.md).[deleteRequest](AbstractListItem.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractListItem](AbstractListItem.md).[dontThrowFor](AbstractListItem.md#dontthrowfor)

#### Defined in

src/list/ListItem.ts:74

___

### get

▸ **get**(): `Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[get](AbstractListItem.md#get)

#### Defined in

src/list/ListItem.ts:86

___

### getAttachmentFiles

▸ **getAttachmentFiles**(): `Promise`\<[`SPFile`](SPFile.md)[]\>

Returns the attachment files of this list item

#### Returns

`Promise`\<[`SPFile`](SPFile.md)[]\>

empty array if the list does not have attachments enabled etc

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getAttachmentFiles](AbstractListItem.md#getattachmentfiles)

#### Defined in

src/list/ListItem.ts:143

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getAuth](AbstractListItem.md#getauth)

#### Defined in

src/list/ListItem.ts:78

___

### getAuthor

▸ **getAuthor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getAuthor](AbstractListItem.md#getauthor)

#### Defined in

src/list/ListItem.ts:101

___

### getCheckoutUser

▸ **getCheckoutUser**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getCheckoutUser](AbstractListItem.md#getcheckoutuser)

#### Defined in

src/list/ListItem.ts:111

___

### getContentType

▸ **getContentType**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getContentType](AbstractListItem.md#getcontenttype)

#### Defined in

src/list/ListItem.ts:135

___

### getEditor

▸ **getEditor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getEditor](AbstractListItem.md#geteditor)

#### Defined in

src/list/ListItem.ts:106

___

### getFile

▸ **getFile**(): `Promise`\<[`SPFile`](SPFile.md)\>

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getFile](AbstractListItem.md#getfile)

#### Defined in

src/list/ListItem.ts:91

___

### getFolder

▸ **getFolder**(): `Promise`\<[`SPFolder`](SPFolder.md)\>

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getFolder](AbstractListItem.md#getfolder)

#### Defined in

src/list/ListItem.ts:96

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

[AbstractListItem](AbstractListItem.md).[getRequest](AbstractListItem.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getWithAuthor

▸ **getWithAuthor**(): `Promise`\<[`ListItemWithAuthor`](../interfaces/ListItemWithAuthor.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItemWithAuthor`](../interfaces/ListItemWithAuthor.md)\<`T`\>\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getWithAuthor](AbstractListItem.md#getwithauthor)

#### Defined in

src/list/ListItem.ts:125

___

### getWithFileOrFolder

▸ **getWithFileOrFolder**(): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

#### Inherited from

[AbstractListItem](AbstractListItem.md).[getWithFileOrFolder](AbstractListItem.md#getwithfileorfolder)

#### Defined in

src/list/ListItem.ts:116

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

[AbstractListItem](AbstractListItem.md).[patchRequest](AbstractListItem.md#patchrequest)

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

[AbstractListItem](AbstractListItem.md).[postRequest](AbstractListItem.md#postrequest)

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

[AbstractListItem](AbstractListItem.md).[putRequest](AbstractListItem.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Overrides

[AbstractListItem](AbstractListItem.md).[toJSON](AbstractListItem.md#tojson)

#### Defined in

src/list/ListItem.ts:341
