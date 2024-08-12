[sharepoint](../README.md) / [Exports](../modules.md) / SPFile

# Class: SPFile

Represents a file in SharePoint

**`Description`**

https://learn.microsoft.com/en-us/previous-versions/office/sharepoint-server/ee543658(v=office.15)

**`Example`**

```ts
const file = await site.getFile("Shared Documents/MyFile.txt");
console.log(file.name); // "MyFile.txt"
console.log(file.serverRelativeUrl); // "/sites/MySite/Shared Documents/MyFile.txt"
```

## Hierarchy

- [`AbstractFile`](AbstractFile.md)

  ↳ **`SPFile`**

## Implements

- [`IFileSystemEntry`](../interfaces/IFileSystemEntry.md)

## Table of contents

### Constructors

- [constructor](SPFile.md#constructor)

### Properties

- [\_checkInComment](SPFile.md#_checkincomment)
- [\_checkOutType](SPFile.md#_checkouttype)
- [\_contentTag](SPFile.md#_contenttag)
- [\_eTag](SPFile.md#_etag)
- [\_exists](SPFile.md#_exists)
- [\_existsAllowThrowForPolicyFailures](SPFile.md#_existsallowthrowforpolicyfailures)
- [\_irmEnabled](SPFile.md#_irmenabled)
- [\_length](SPFile.md#_length)
- [\_level](SPFile.md#_level)
- [\_majorVersion](SPFile.md#_majorversion)
- [\_minorVersion](SPFile.md#_minorversion)
- [\_name](SPFile.md#_name)
- [\_serverRelativeUrl](SPFile.md#_serverrelativeurl)
- [\_site](SPFile.md#_site)
- [\_timeCreated](SPFile.md#_timecreated)
- [\_timeLastModified](SPFile.md#_timelastmodified)
- [\_uniqueId](SPFile.md#_uniqueid)

### Accessors

- [baseUrl](SPFile.md#baseurl)
- [checkInComment](SPFile.md#checkincomment)
- [checkOutType](SPFile.md#checkouttype)
- [contentTag](SPFile.md#contenttag)
- [eTag](SPFile.md#etag)
- [exists](SPFile.md#exists)
- [existsAllowThrowForPolicyFailures](SPFile.md#existsallowthrowforpolicyfailures)
- [irmEnabled](SPFile.md#irmenabled)
- [length](SPFile.md#length)
- [level](SPFile.md#level)
- [majorVersion](SPFile.md#majorversion)
- [minorVersion](SPFile.md#minorversion)
- [name](SPFile.md#name)
- [serverRelativeUrl](SPFile.md#serverrelativeurl)
- [site](SPFile.md#site)
- [timeCreated](SPFile.md#timecreated)
- [timeLastModified](SPFile.md#timelastmodified)
- [uniqueId](SPFile.md#uniqueid)

### Methods

- [checkIn](SPFile.md#checkin)
- [checkOut](SPFile.md#checkout)
- [copyTo](SPFile.md#copyto)
- [delete](SPFile.md#delete)
- [deleteRequest](SPFile.md#deleterequest)
- [dontThrowFor](SPFile.md#dontthrowfor)
- [download](SPFile.md#download)
- [get](SPFile.md#get)
- [getAuth](SPFile.md#getauth)
- [getAuthor](SPFile.md#getauthor)
- [getListItem](SPFile.md#getlistitem)
- [getPath](SPFile.md#getpath)
- [getRequest](SPFile.md#getrequest)
- [getWithAuthor](SPFile.md#getwithauthor)
- [moveTo](SPFile.md#moveto)
- [patchRequest](SPFile.md#patchrequest)
- [postRequest](SPFile.md#postrequest)
- [putRequest](SPFile.md#putrequest)
- [recycle](SPFile.md#recycle)
- [toJSON](SPFile.md#tojson)
- [toString](SPFile.md#tostring)
- [undoCheckOut](SPFile.md#undocheckout)
- [updateContents](SPFile.md#updatecontents)
- [upload](SPFile.md#upload)
- [FromResponse](SPFile.md#fromresponse)

## Constructors

### constructor

• **new SPFile**(`site`, `response`): [`SPFile`](SPFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `response` | [`FileResponse`](../interfaces/FileResponse.md) |

#### Returns

[`SPFile`](SPFile.md)

#### Overrides

[AbstractFile](AbstractFile.md).[constructor](AbstractFile.md#constructor)

#### Defined in

src/filesystem/SPFile.ts:41

## Properties

### \_checkInComment

• `Private` `Readonly` **\_checkInComment**: `string`

#### Defined in

src/filesystem/SPFile.ts:26

___

### \_checkOutType

• `Private` `Readonly` **\_checkOutType**: [`CheckOutType`](../enums/CheckOutType.md)

#### Defined in

src/filesystem/SPFile.ts:27

___

### \_contentTag

• `Private` `Readonly` **\_contentTag**: `string`

#### Defined in

src/filesystem/SPFile.ts:28

___

### \_eTag

• `Private` `Readonly` **\_eTag**: `number`

#### Defined in

src/filesystem/SPFile.ts:29

___

### \_exists

• `Protected` `Readonly` **\_exists**: `boolean`

#### Defined in

src/filesystem/SPFile.ts:18

___

### \_existsAllowThrowForPolicyFailures

• `Protected` `Readonly` **\_existsAllowThrowForPolicyFailures**: `boolean`

#### Defined in

src/filesystem/SPFile.ts:19

___

### \_irmEnabled

• `Private` `Readonly` **\_irmEnabled**: `boolean`

#### Defined in

src/filesystem/SPFile.ts:30

___

### \_length

• `Private` `Readonly` **\_length**: `number`

#### Defined in

src/filesystem/SPFile.ts:31

___

### \_level

• `Private` `Readonly` **\_level**: [`SPFileLevel`](../enums/SPFileLevel.md)

#### Defined in

src/filesystem/SPFile.ts:32

___

### \_majorVersion

• `Private` `Readonly` **\_majorVersion**: `number`

#### Defined in

src/filesystem/SPFile.ts:33

___

### \_minorVersion

• `Private` `Readonly` **\_minorVersion**: `number`

#### Defined in

src/filesystem/SPFile.ts:34

___

### \_name

• `Protected` `Readonly` **\_name**: `string`

#### Defined in

src/filesystem/SPFile.ts:20

___

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

___

### \_timeCreated

• `Protected` `Readonly` **\_timeCreated**: `Date`

#### Defined in

src/filesystem/SPFile.ts:21

___

### \_timeLastModified

• `Protected` `Readonly` **\_timeLastModified**: `Date`

#### Defined in

src/filesystem/SPFile.ts:22

___

### \_uniqueId

• `Protected` `Readonly` **\_uniqueId**: `string`

#### Defined in

src/filesystem/SPFile.ts:23

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

### checkInComment

• `get` **checkInComment**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFile.ts:93

___

### checkOutType

• `get` **checkOutType**(): [`CheckOutType`](../enums/CheckOutType.md)

#### Returns

[`CheckOutType`](../enums/CheckOutType.md)

#### Defined in

src/filesystem/SPFile.ts:97

___

### contentTag

• `get` **contentTag**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFile.ts:101

___

### eTag

• `get` **eTag**(): `number`

#### Returns

`number`

#### Defined in

src/filesystem/SPFile.ts:105

___

### exists

• `get` **exists**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IFileSystemEntry.exists

#### Defined in

src/filesystem/SPFile.ts:85

___

### existsAllowThrowForPolicyFailures

• `get` **existsAllowThrowForPolicyFailures**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IFileSystemEntry.existsAllowThrowForPolicyFailures

#### Defined in

src/filesystem/SPFile.ts:89

___

### irmEnabled

• `get` **irmEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/filesystem/SPFile.ts:109

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

src/filesystem/SPFile.ts:113

___

### level

• `get` **level**(): [`SPFileLevel`](../enums/SPFileLevel.md)

#### Returns

[`SPFileLevel`](../enums/SPFileLevel.md)

#### Defined in

src/filesystem/SPFile.ts:117

___

### majorVersion

• `get` **majorVersion**(): `number`

#### Returns

`number`

#### Defined in

src/filesystem/SPFile.ts:121

___

### minorVersion

• `get` **minorVersion**(): `number`

#### Returns

`number`

#### Defined in

src/filesystem/SPFile.ts:125

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

IFileSystemEntry.name

#### Defined in

src/filesystem/SPFile.ts:65

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Implementation of

IFileSystemEntry.serverRelativeUrl

#### Overrides

AbstractFile.serverRelativeUrl

#### Defined in

src/filesystem/SPFile.ts:69

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractFile.site

#### Defined in

src/filesystem/AbstractFile.ts:34

___

### timeCreated

• `get` **timeCreated**(): `Date`

#### Returns

`Date`

#### Implementation of

IFileSystemEntry.timeCreated

#### Defined in

src/filesystem/SPFile.ts:73

___

### timeLastModified

• `get` **timeLastModified**(): `Date`

#### Returns

`Date`

#### Implementation of

IFileSystemEntry.timeLastModified

#### Defined in

src/filesystem/SPFile.ts:77

___

### uniqueId

• `get` **uniqueId**(): `string`

#### Returns

`string`

#### Implementation of

IFileSystemEntry.uniqueId

#### Defined in

src/filesystem/SPFile.ts:81

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

#### Overrides

[AbstractFile](AbstractFile.md).[get](AbstractFile.md#get)

#### Defined in

src/filesystem/SPFile.ts:61

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

#### Implementation of

[IFileSystemEntry](../interfaces/IFileSystemEntry.md).[getPath](../interfaces/IFileSystemEntry.md#getpath)

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

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `checkInComment` | `string` |
| `checkOutType` | `string` |
| `contentTag` | `string` |
| `eTag` | `number` |
| `exists` | `boolean` |
| `existsAllowThrowForPolicyFailures` | `boolean` |
| `irmEnabled` | `boolean` |
| `length` | `number` |
| `level` | [`SPFileLevel`](../enums/SPFileLevel.md) |
| `majorVersion` | `number` |
| `minorVersion` | `number` |
| `name` | `string` |
| `timeCreated` | `Date` |
| `timeLastModified` | `Date` |
| `uniqueId` | `string` |

#### Overrides

[AbstractFile](AbstractFile.md).[toJSON](AbstractFile.md#tojson)

#### Defined in

src/filesystem/SPFile.ts:129

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[IFileSystemEntry](../interfaces/IFileSystemEntry.md).[toString](../interfaces/IFileSystemEntry.md#tostring)

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

___

### FromResponse

▸ **FromResponse**(`site`, `response`): [`SPFile`](SPFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `response` | [`FileResponse`](../interfaces/FileResponse.md) |

#### Returns

[`SPFile`](SPFile.md)

#### Defined in

src/filesystem/SPFile.ts:150
