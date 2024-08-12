[sharepoint](../README.md) / [Exports](../modules.md) / Site

# Class: Site

Represents a SharePoint site

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`Site`**

## Table of contents

### Constructors

- [constructor](Site.md#constructor)

### Properties

- [\_name](Site.md#_name)
- [\_tenant](Site.md#_tenant)
- [authenticator](Site.md#authenticator)

### Accessors

- [baseUrl](Site.md#baseurl)
- [name](Site.md#name)
- [tenant](Site.md#tenant)

### Methods

- [createFolder](Site.md#createfolder)
- [deleteFolder](Site.md#deletefolder)
- [deleteRequest](Site.md#deleterequest)
- [dontThrowFor](Site.md#dontthrowfor)
- [getAuth](Site.md#getauth)
- [getFiles](Site.md#getfiles)
- [getFilesAndFolders](Site.md#getfilesandfolders)
- [getFolders](Site.md#getfolders)
- [getInfo](Site.md#getinfo)
- [getListById](Site.md#getlistbyid)
- [getListByTitle](Site.md#getlistbytitle)
- [getLists](Site.md#getlists)
- [getPartialFileByPath](Site.md#getpartialfilebypath)
- [getPartialFolderById](Site.md#getpartialfolderbyid)
- [getPartialFolderByPath](Site.md#getpartialfolderbypath)
- [getPartialListById](Site.md#getpartiallistbyid)
- [getPartialListByTitle](Site.md#getpartiallistbytitle)
- [getPath](Site.md#getpath)
- [getPathEncoded](Site.md#getpathencoded)
- [getRequest](Site.md#getrequest)
- [getURL](Site.md#geturl)
- [patchRequest](Site.md#patchrequest)
- [postRequest](Site.md#postrequest)
- [putRequest](Site.md#putrequest)
- [toJSON](Site.md#tojson)
- [toString](Site.md#tostring)
- [FromInfo](Site.md#frominfo)

## Constructors

### constructor

• **new Site**(`tenant`, `name`, `auth`): [`Site`](Site.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenant` | `string` |
| `name` | `string` |
| `auth` | [`Authenticator`](../interfaces/Authenticator.md) |

#### Returns

[`Site`](Site.md)

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/Site.ts:17

## Properties

### \_name

• `Private` `Readonly` **\_name**: `string`

#### Defined in

src/Site.ts:13

___

### \_tenant

• `Private` `Readonly` **\_tenant**: `string`

#### Defined in

src/Site.ts:14

___

### authenticator

• `Private` `Readonly` **authenticator**: [`Authenticator`](../interfaces/Authenticator.md)

#### Defined in

src/Site.ts:15

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

RequestSender.baseUrl

#### Defined in

src/Site.ts:32

___

### name

• `get` **name**(): `string`

Returns the site's name

#### Returns

`string`

name of the site

#### Defined in

src/Site.ts:58

___

### tenant

• `get` **tenant**(): `string`

#### Returns

`string`

#### Defined in

src/Site.ts:66

## Methods

### createFolder

▸ **createFolder**(`folder`): `Promise`\<[`SPFolder`](SPFolder.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | [`PathLike`](../modules.md#pathlike) |

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)\>

#### Defined in

src/Site.ts:117

___

### deleteFolder

▸ **deleteFolder**(`folder`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | [`PathLike`](../modules.md#pathlike) |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/Site.ts:121

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

src/Site.ts:24

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

#### Defined in

src/Site.ts:28

___

### getFiles

▸ **getFiles**(`folder?`): `Promise`\<[`SPFile`](SPFile.md)[]\>

Get files inside a folder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `folder?` | [`PathLike`](../modules.md#pathlike) | The path of the folder to get the files from |

#### Returns

`Promise`\<[`SPFile`](SPFile.md)[]\>

A promise that resolves with the files inside the folder

**`Example`**

```ts
const files = await site.getFiles("/Shared Documents");
// Is the same as
const files = await site.getFiles("/sites/MySite/Shared Documents");
// Is the same as
```

**`Example`**

```ts
const folder = await site.getFolder("/Shared Documents");
const files = await folder.getFiles();
// Is the same as
const folder = await site.getFolder("/Shared Documents");
const files = await site.getFiles(folder);
```

**`Example`**

```ts
const files = await site.getFiles(); // Gets files from the root (site) folder
```

#### Defined in

src/Site.ts:105

___

### getFilesAndFolders

▸ **getFilesAndFolders**(`folder?`): `Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder?` | [`PathLike`](../modules.md#pathlike) |

#### Returns

`Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

#### Defined in

src/Site.ts:113

___

### getFolders

▸ **getFolders**(`folder?`): `Promise`\<[`SPFolder`](SPFolder.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder?` | [`PathLike`](../modules.md#pathlike) |

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)[]\>

#### Defined in

src/Site.ts:109

___

### getInfo

▸ **getInfo**(): `SiteInfo`

#### Returns

`SiteInfo`

#### Defined in

src/Site.ts:70

___

### getListById

▸ **getListById**(`id`): `Promise`\<[`List`](List.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`List`](List.md)\>

#### Defined in

src/Site.ts:154

___

### getListByTitle

▸ **getListByTitle**(`title`): `Promise`\<[`List`](List.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`\<[`List`](List.md)\>

#### Defined in

src/Site.ts:150

___

### getLists

▸ **getLists**(): `Promise`\<[`List`](List.md)[]\>

#### Returns

`Promise`\<[`List`](List.md)[]\>

#### Defined in

src/Site.ts:125

___

### getPartialFileByPath

▸ **getPartialFileByPath**(`path`): [`PartialFile`](PartialFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules.md#pathlike) |

#### Returns

[`PartialFile`](PartialFile.md)

#### Defined in

src/Site.ts:130

___

### getPartialFolderById

▸ **getPartialFolderById**(`id`): [`PartialFolderById`](PartialFolderById.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`PartialFolderById`](PartialFolderById.md)

#### Defined in

src/Site.ts:138

___

### getPartialFolderByPath

▸ **getPartialFolderByPath**(`path?`): [`PartialFolderByPath`](PartialFolderByPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`PathLike`](../modules.md#pathlike) |

#### Returns

[`PartialFolderByPath`](PartialFolderByPath.md)

#### Defined in

src/Site.ts:134

___

### getPartialListById

▸ **getPartialListById**(`id`): [`PartialListById`](PartialListById.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`PartialListById`](PartialListById.md)

#### Defined in

src/Site.ts:146

___

### getPartialListByTitle

▸ **getPartialListByTitle**(`title`): [`PartialListByTitle`](PartialListByTitle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`PartialListByTitle`](PartialListByTitle.md)

#### Defined in

src/Site.ts:142

___

### getPath

▸ **getPath**(`pathOrFolder?`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathOrFolder?` | [`PathLike`](../modules.md#pathlike) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/Site.ts:78

___

### getPathEncoded

▸ **getPathEncoded**(`pathOrFolder?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathOrFolder?` | [`PathLike`](../modules.md#pathlike) |

#### Returns

`string`

#### Defined in

src/Site.ts:83

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

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

src/Site.ts:62

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

▸ **toJSON**(): `SiteInfo`

#### Returns

`SiteInfo`

#### Defined in

src/Site.ts:50

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/Site.ts:46

___

### FromInfo

▸ **FromInfo**(`siteInfo`, `auth`): [`Site`](Site.md)

Get a site instance from a SiteInfo and AuthFn

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `siteInfo` | `SiteInfo` | site information |
| `auth` | [`Authenticator`](../interfaces/Authenticator.md) | a callback function that returns a bearer token |

#### Returns

[`Site`](Site.md)

#### Defined in

src/Site.ts:42
