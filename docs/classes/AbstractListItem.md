[sharepoint](../README.md) / [Exports](../modules.md) / AbstractListItem

# Class: AbstractListItem\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`AbstractListItem`**

  ↳↳ [`ListItem`](ListItem.md)

  ↳↳ [`PartialListItemById`](PartialListItemById.md)

## Table of contents

### Constructors

- [constructor](AbstractListItem.md#constructor)

### Properties

- [\_list](AbstractListItem.md#_list)

### Accessors

- [baseUrl](AbstractListItem.md#baseurl)
- [list](AbstractListItem.md#list)

### Methods

- [deleteRequest](AbstractListItem.md#deleterequest)
- [dontThrowFor](AbstractListItem.md#dontthrowfor)
- [get](AbstractListItem.md#get)
- [getAttachmentFiles](AbstractListItem.md#getattachmentfiles)
- [getAuth](AbstractListItem.md#getauth)
- [getAuthor](AbstractListItem.md#getauthor)
- [getCheckoutUser](AbstractListItem.md#getcheckoutuser)
- [getContentType](AbstractListItem.md#getcontenttype)
- [getEditor](AbstractListItem.md#geteditor)
- [getFile](AbstractListItem.md#getfile)
- [getFolder](AbstractListItem.md#getfolder)
- [getRequest](AbstractListItem.md#getrequest)
- [getWithAuthor](AbstractListItem.md#getwithauthor)
- [getWithFileOrFolder](AbstractListItem.md#getwithfileorfolder)
- [patchRequest](AbstractListItem.md#patchrequest)
- [postRequest](AbstractListItem.md#postrequest)
- [putRequest](AbstractListItem.md#putrequest)
- [toJSON](AbstractListItem.md#tojson)

## Constructors

### constructor

• **new AbstractListItem**\<`T`\>(`list`): [`AbstractListItem`](AbstractListItem.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |

#### Returns

[`AbstractListItem`](AbstractListItem.md)\<`T`\>

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/list/ListItem.ts:69

## Properties

### \_list

• `Protected` `Readonly` **\_list**: `T`

#### Defined in

src/list/ListItem.ts:67

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

### list

• `get` **list**(): `T`

#### Returns

`T`

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

src/list/ListItem.ts:74

___

### get

▸ **get**(): `Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Defined in

src/list/ListItem.ts:86

___

### getAttachmentFiles

▸ **getAttachmentFiles**(): `Promise`\<[`SPFile`](SPFile.md)[]\>

Returns the attachment files of this list item

#### Returns

`Promise`\<[`SPFile`](SPFile.md)[]\>

empty array if the list does not have attachments enabled etc

#### Defined in

src/list/ListItem.ts:143

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

#### Defined in

src/list/ListItem.ts:78

___

### getAuthor

▸ **getAuthor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Defined in

src/list/ListItem.ts:101

___

### getCheckoutUser

▸ **getCheckoutUser**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Defined in

src/list/ListItem.ts:111

___

### getContentType

▸ **getContentType**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

src/list/ListItem.ts:135

___

### getEditor

▸ **getEditor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Defined in

src/list/ListItem.ts:106

___

### getFile

▸ **getFile**(): `Promise`\<[`SPFile`](SPFile.md)\>

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Defined in

src/list/ListItem.ts:91

___

### getFolder

▸ **getFolder**(): `Promise`\<[`SPFolder`](SPFolder.md)\>

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)\>

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

[RequestSender](RequestSender.md).[getRequest](RequestSender.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getWithAuthor

▸ **getWithAuthor**(): `Promise`\<[`ListItemWithAuthor`](../interfaces/ListItemWithAuthor.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItemWithAuthor`](../interfaces/ListItemWithAuthor.md)\<`T`\>\>

#### Defined in

src/list/ListItem.ts:125

___

### getWithFileOrFolder

▸ **getWithFileOrFolder**(): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

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

src/list/ListItem.ts:151
