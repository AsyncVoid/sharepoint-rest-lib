[sharepoint](../README.md) / [Exports](../modules.md) / PartialFile

# Class: PartialFile

## Hierarchy

- [`AbstractFile`](AbstractFile.md)

  ↳ **`PartialFile`**

## Table of contents

### Constructors

- [constructor](PartialFile.md#constructor)

### Properties

- [\_serverRelativeUrl](PartialFile.md#_serverrelativeurl)
- [\_site](PartialFile.md#_site)

### Accessors

- [baseUrl](PartialFile.md#baseurl)
- [serverRelativeUrl](PartialFile.md#serverrelativeurl)
- [site](PartialFile.md#site)

### Methods

- [checkIn](PartialFile.md#checkin)
- [checkOut](PartialFile.md#checkout)
- [copyTo](PartialFile.md#copyto)
- [delete](PartialFile.md#delete)
- [deleteRequest](PartialFile.md#deleterequest)
- [dontThrowFor](PartialFile.md#dontthrowfor)
- [download](PartialFile.md#download)
- [get](PartialFile.md#get)
- [getAuth](PartialFile.md#getauth)
- [getAuthor](PartialFile.md#getauthor)
- [getListItem](PartialFile.md#getlistitem)
- [getPath](PartialFile.md#getpath)
- [getRequest](PartialFile.md#getrequest)
- [getWithAuthor](PartialFile.md#getwithauthor)
- [moveTo](PartialFile.md#moveto)
- [patchRequest](PartialFile.md#patchrequest)
- [postRequest](PartialFile.md#postrequest)
- [putRequest](PartialFile.md#putrequest)
- [recycle](PartialFile.md#recycle)
- [toJSON](PartialFile.md#tojson)
- [toString](PartialFile.md#tostring)
- [undoCheckOut](PartialFile.md#undocheckout)
- [updateContents](PartialFile.md#updatecontents)
- [upload](PartialFile.md#upload)

## Constructors

### constructor

• **new PartialFile**(`site`, `serverRelativeUrl`): [`PartialFile`](PartialFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `serverRelativeUrl` | `string` |

#### Returns

[`PartialFile`](PartialFile.md)

#### Overrides

[AbstractFile](AbstractFile.md).[constructor](AbstractFile.md#constructor)

#### Defined in

src/filesystem/PartialFile.ts:5

## Properties

### \_serverRelativeUrl

• `Protected` `Readonly` **\_serverRelativeUrl**: `string`

#### Inherited from

[AbstractFile](AbstractFile.md).[_serverRelativeUrl](AbstractFile.md#_serverrelativeurl)

#### Defined in

src/filesystem/AbstractFile.ts:18

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Inherited from

[AbstractFile](AbstractFile.md).[_site](AbstractFile.md#_site)

#### Defined in

src/filesystem/AbstractFile.ts:17

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Inherited from

AbstractFile.baseUrl

#### Defined in

src/filesystem/AbstractFile.ts:42

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Inherited from

AbstractFile.serverRelativeUrl

#### Defined in

src/filesystem/AbstractFile.ts:38

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractFile.site

#### Defined in

src/filesystem/AbstractFile.ts:34

## Methods

### checkIn

▸ **checkIn**(`comment`, `checkinType`): `Promise`\<`void`\>

Checks in the file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment` | `string` | The comment to add to the check in |
| `checkinType` | [`CheckInType`](../enums/CheckInType.md) | The type of check in to perform |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AbstractFile](AbstractFile.md).[checkIn](AbstractFile.md#checkin)

#### Defined in

src/filesystem/AbstractFile.ts:145

___

### checkOut

▸ **checkOut**(): `Promise`\<`void`\>

Checks out the file

#### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been checked out

#### Inherited from

[AbstractFile](AbstractFile.md).[checkOut](AbstractFile.md#checkout)

#### Defined in

src/filesystem/AbstractFile.ts:132

___

### copyTo

▸ **copyTo**(`destination`, `overwrite?`): `Promise`\<[`SPFile`](SPFile.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `destination` | [`PathLike`](../modules.md#pathlike) | `undefined` |
| `overwrite` | `boolean` | `false` |

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[copyTo](AbstractFile.md#copyto)

#### Defined in

src/filesystem/AbstractFile.ts:100

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AbstractFile](AbstractFile.md).[delete](AbstractFile.md#delete)

#### Defined in

src/filesystem/AbstractFile.ts:107

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

[AbstractFile](AbstractFile.md).[deleteRequest](AbstractFile.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractFile](AbstractFile.md).[dontThrowFor](AbstractFile.md#dontthrowfor)

#### Defined in

src/filesystem/AbstractFile.ts:26

___

### download

▸ **download**(): `Promise`\<`Blob`\>

Download the file

#### Returns

`Promise`\<`Blob`\>

A promise that resolves to the file contents

#### Inherited from

[AbstractFile](AbstractFile.md).[download](AbstractFile.md#download)

#### Defined in

src/filesystem/AbstractFile.ts:119

___

### get

▸ **get**(): `Promise`\<[`SPFile`](SPFile.md)\>

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[get](AbstractFile.md#get)

#### Defined in

src/filesystem/AbstractFile.ts:56

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractFile](AbstractFile.md).[getAuth](AbstractFile.md#getauth)

#### Defined in

src/filesystem/AbstractFile.ts:30

___

### getAuthor

▸ **getAuthor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[getAuthor](AbstractFile.md#getauthor)

#### Defined in

src/filesystem/AbstractFile.ts:71

___

### getListItem

▸ **getListItem**(): `Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Inherited from

[AbstractFile](AbstractFile.md).[getListItem](AbstractFile.md#getlistitem)

#### Defined in

src/filesystem/AbstractFile.ts:163

___

### getPath

▸ **getPath**(): [`SPPath`](SPPath.md)

#### Returns

[`SPPath`](SPPath.md)

#### Inherited from

[AbstractFile](AbstractFile.md).[getPath](AbstractFile.md#getpath)

#### Defined in

src/filesystem/AbstractFile.ts:170

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

[AbstractFile](AbstractFile.md).[getRequest](AbstractFile.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getWithAuthor

▸ **getWithAuthor**(): `Promise`\<[`FileWithAuthor`](../interfaces/FileWithAuthor.md)\>

#### Returns

`Promise`\<[`FileWithAuthor`](../interfaces/FileWithAuthor.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[getWithAuthor](AbstractFile.md#getwithauthor)

#### Defined in

src/filesystem/AbstractFile.ts:60

___

### moveTo

▸ **moveTo**(`destination`, `flags?`): `Promise`\<[`SPFile`](SPFile.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `destination` | [`PathLike`](../modules.md#pathlike) | `undefined` |
| `flags` | [`SPMoveOperations`](../enums/SPMoveOperations.md) | `SPMoveOperations.Overwrite` |

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[moveTo](AbstractFile.md#moveto)

#### Defined in

src/filesystem/AbstractFile.ts:85

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

[AbstractFile](AbstractFile.md).[patchRequest](AbstractFile.md#patchrequest)

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

[AbstractFile](AbstractFile.md).[postRequest](AbstractFile.md#postrequest)

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

[AbstractFile](AbstractFile.md).[putRequest](AbstractFile.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### recycle

▸ **recycle**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AbstractFile](AbstractFile.md).[recycle](AbstractFile.md#recycle)

#### Defined in

src/filesystem/AbstractFile.ts:111

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Inherited from

[AbstractFile](AbstractFile.md).[toJSON](AbstractFile.md#tojson)

#### Defined in

src/filesystem/AbstractFile.ts:50

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractFile](AbstractFile.md).[toString](AbstractFile.md#tostring)

#### Defined in

src/filesystem/AbstractFile.ts:46

___

### undoCheckOut

▸ **undoCheckOut**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AbstractFile](AbstractFile.md).[undoCheckOut](AbstractFile.md#undocheckout)

#### Defined in

src/filesystem/AbstractFile.ts:136

___

### updateContents

▸ **updateContents**(`contents`): `Promise`\<[`SPFile`](SPFile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | `Blob` |

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[updateContents](AbstractFile.md#updatecontents)

#### Defined in

src/filesystem/AbstractFile.ts:76

___

### upload

▸ **upload**(`contents`, `overwrite?`): `Promise`\<[`SPFile`](SPFile.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contents` | `Blob` | `undefined` |
| `overwrite` | `boolean` | `false` |

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Inherited from

[AbstractFile](AbstractFile.md).[upload](AbstractFile.md#upload)

#### Defined in

src/filesystem/AbstractFile.ts:149
