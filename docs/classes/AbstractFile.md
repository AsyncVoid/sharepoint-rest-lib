[sharepoint](../README.md) / [Exports](../modules.md) / AbstractFile

# Class: AbstractFile

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`AbstractFile`**

  ↳↳ [`PartialFile`](PartialFile.md)

  ↳↳ [`SPFile`](SPFile.md)

## Implements

- [`HasServerRelativeUrl`](../interfaces/HasServerRelativeUrl.md)

## Table of contents

### Constructors

- [constructor](AbstractFile.md#constructor)

### Properties

- [\_serverRelativeUrl](AbstractFile.md#_serverrelativeurl)
- [\_site](AbstractFile.md#_site)

### Accessors

- [baseUrl](AbstractFile.md#baseurl)
- [serverRelativeUrl](AbstractFile.md#serverrelativeurl)
- [site](AbstractFile.md#site)

### Methods

- [checkIn](AbstractFile.md#checkin)
- [checkOut](AbstractFile.md#checkout)
- [copyTo](AbstractFile.md#copyto)
- [delete](AbstractFile.md#delete)
- [deleteRequest](AbstractFile.md#deleterequest)
- [dontThrowFor](AbstractFile.md#dontthrowfor)
- [download](AbstractFile.md#download)
- [get](AbstractFile.md#get)
- [getAuth](AbstractFile.md#getauth)
- [getAuthor](AbstractFile.md#getauthor)
- [getListItem](AbstractFile.md#getlistitem)
- [getPath](AbstractFile.md#getpath)
- [getRequest](AbstractFile.md#getrequest)
- [getWithAuthor](AbstractFile.md#getwithauthor)
- [moveTo](AbstractFile.md#moveto)
- [patchRequest](AbstractFile.md#patchrequest)
- [postRequest](AbstractFile.md#postrequest)
- [putRequest](AbstractFile.md#putrequest)
- [recycle](AbstractFile.md#recycle)
- [toJSON](AbstractFile.md#tojson)
- [toString](AbstractFile.md#tostring)
- [undoCheckOut](AbstractFile.md#undocheckout)
- [updateContents](AbstractFile.md#updatecontents)
- [upload](AbstractFile.md#upload)

## Constructors

### constructor

• **new AbstractFile**(`site`, `serverRelativeUrl`): [`AbstractFile`](AbstractFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `serverRelativeUrl` | `string` |

#### Returns

[`AbstractFile`](AbstractFile.md)

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/filesystem/AbstractFile.ts:20

## Properties

### \_serverRelativeUrl

• `Protected` `Readonly` **\_serverRelativeUrl**: `string`

#### Defined in

src/filesystem/AbstractFile.ts:18

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Defined in

src/filesystem/AbstractFile.ts:17

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

RequestSender.baseUrl

#### Defined in

src/filesystem/AbstractFile.ts:42

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Implementation of

HasServerRelativeUrl.serverRelativeUrl

#### Defined in

src/filesystem/AbstractFile.ts:38

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

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

#### Defined in

src/filesystem/AbstractFile.ts:145

___

### checkOut

▸ **checkOut**(): `Promise`\<`void`\>

Checks out the file

#### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been checked out

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

#### Defined in

src/filesystem/AbstractFile.ts:100

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

src/filesystem/AbstractFile.ts:26

___

### download

▸ **download**(): `Promise`\<`Blob`\>

Download the file

#### Returns

`Promise`\<`Blob`\>

A promise that resolves to the file contents

#### Defined in

src/filesystem/AbstractFile.ts:119

___

### get

▸ **get**(): `Promise`\<[`SPFile`](SPFile.md)\>

#### Returns

`Promise`\<[`SPFile`](SPFile.md)\>

#### Defined in

src/filesystem/AbstractFile.ts:56

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

#### Defined in

src/filesystem/AbstractFile.ts:30

___

### getAuthor

▸ **getAuthor**(): `Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Returns

`Promise`\<[`UserInfoItem`](UserInfoItem.md)\>

#### Defined in

src/filesystem/AbstractFile.ts:71

___

### getListItem

▸ **getListItem**(): `Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Defined in

src/filesystem/AbstractFile.ts:163

___

### getPath

▸ **getPath**(): [`SPPath`](SPPath.md)

#### Returns

[`SPPath`](SPPath.md)

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

[RequestSender](RequestSender.md).[getRequest](RequestSender.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getWithAuthor

▸ **getWithAuthor**(): `Promise`\<[`FileWithAuthor`](../interfaces/FileWithAuthor.md)\>

#### Returns

`Promise`\<[`FileWithAuthor`](../interfaces/FileWithAuthor.md)\>

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

### recycle

▸ **recycle**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

src/filesystem/AbstractFile.ts:111

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/filesystem/AbstractFile.ts:50

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/AbstractFile.ts:46

___

### undoCheckOut

▸ **undoCheckOut**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

src/filesystem/AbstractFile.ts:149
