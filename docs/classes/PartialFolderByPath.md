[sharepoint](../README.md) / [Exports](../modules.md) / PartialFolderByPath

# Class: PartialFolderByPath

## Hierarchy

- [`AbstractFolder`](AbstractFolder.md)

  ↳ **`PartialFolderByPath`**

## Implements

- [`HasServerRelativeUrl`](../interfaces/HasServerRelativeUrl.md)

## Table of contents

### Constructors

- [constructor](PartialFolderByPath.md#constructor)

### Properties

- [\_serverRelativeUrl](PartialFolderByPath.md#_serverrelativeurl)
- [\_site](PartialFolderByPath.md#_site)

### Accessors

- [baseUrl](PartialFolderByPath.md#baseurl)
- [serverRelativeUrl](PartialFolderByPath.md#serverrelativeurl)
- [site](PartialFolderByPath.md#site)

### Methods

- [create](PartialFolderByPath.md#create)
- [delete](PartialFolderByPath.md#delete)
- [deleteRequest](PartialFolderByPath.md#deleterequest)
- [dontThrowFor](PartialFolderByPath.md#dontthrowfor)
- [get](PartialFolderByPath.md#get)
- [getAuth](PartialFolderByPath.md#getauth)
- [getFiles](PartialFolderByPath.md#getfiles)
- [getFolders](PartialFolderByPath.md#getfolders)
- [getRequest](PartialFolderByPath.md#getrequest)
- [getSubTree](PartialFolderByPath.md#getsubtree)
- [getWithFiles](PartialFolderByPath.md#getwithfiles)
- [getWithFilesAndFolders](PartialFolderByPath.md#getwithfilesandfolders)
- [getWithFilesAuthorsAndFolders](PartialFolderByPath.md#getwithfilesauthorsandfolders)
- [getWithFolders](PartialFolderByPath.md#getwithfolders)
- [patchRequest](PartialFolderByPath.md#patchrequest)
- [postRequest](PartialFolderByPath.md#postrequest)
- [putRequest](PartialFolderByPath.md#putrequest)
- [toString](PartialFolderByPath.md#tostring)

## Constructors

### constructor

• **new PartialFolderByPath**(`site`, `serverRelativeUrl`): [`PartialFolderByPath`](PartialFolderByPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `serverRelativeUrl` | `string` |

#### Returns

[`PartialFolderByPath`](PartialFolderByPath.md)

#### Overrides

[AbstractFolder](AbstractFolder.md).[constructor](AbstractFolder.md#constructor)

#### Defined in

src/filesystem/PartialFolderByPath.ts:10

## Properties

### \_serverRelativeUrl

• `Private` `Readonly` **\_serverRelativeUrl**: `string`

#### Defined in

src/filesystem/PartialFolderByPath.ts:8

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Inherited from

[AbstractFolder](AbstractFolder.md).[_site](AbstractFolder.md#_site)

#### Defined in

src/filesystem/AbstractFolder.ts:14

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractFolder.baseUrl

#### Defined in

src/filesystem/PartialFolderByPath.ts:15

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Implementation of

HasServerRelativeUrl.serverRelativeUrl

#### Defined in

src/filesystem/PartialFolderByPath.ts:23

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractFolder.site

#### Defined in

src/filesystem/AbstractFolder.ts:29

## Methods

### create

▸ **create**(): `Promise`\<[`SPFolder`](SPFolder.md)\>

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)\>

#### Defined in

src/filesystem/PartialFolderByPath.ts:27

___

### delete

▸ **delete**(): `Promise`\<`void`\>

Deletes this folder without sending it to the recycle bin

#### Returns

`Promise`\<`void`\>

A promise that resolves when the folder is deleted

#### Inherited from

[AbstractFolder](AbstractFolder.md).[delete](AbstractFolder.md#delete)

#### Defined in

src/filesystem/AbstractFolder.ts:202

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

[AbstractFolder](AbstractFolder.md).[deleteRequest](AbstractFolder.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractFolder](AbstractFolder.md).[dontThrowFor](AbstractFolder.md#dontthrowfor)

#### Defined in

src/filesystem/AbstractFolder.ts:21

___

### get

▸ **get**(): `Promise`\<[`SPFolder`](SPFolder.md)\>

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)\>

#### Inherited from

[AbstractFolder](AbstractFolder.md).[get](AbstractFolder.md#get)

#### Defined in

src/filesystem/AbstractFolder.ts:33

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getAuth](AbstractFolder.md#getauth)

#### Defined in

src/filesystem/AbstractFolder.ts:25

___

### getFiles

▸ **getFiles**(): `Promise`\<[`SPFile`](SPFile.md)[]\>

Gets the files within this folder

#### Returns

`Promise`\<[`SPFile`](SPFile.md)[]\>

The files within this folder

**`Example`**

```ts
const folder : SPFolder = await site.getFolder("/Shared Documents");
const files = await folder.getFiles();
console.log(files.length); // 5
console.log(files[0].name); // "MyFile.docx"
```

**`Example`**

```ts
const partialFolder : PartialFolderByPath = site.getPartialFolderByPath("/Shared Documents");
const files = await partialFolder.getFiles();
console.log(files.length); // 5
console.log(files[0].name); // "MyFile.docx"
```

**`See`**

[SPFolder.getWithFiles](SPFolder.md#getwithfiles) for a more efficient way to get the folder as well as the files within it (for partial folders)

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getFiles](AbstractFolder.md#getfiles)

#### Defined in

src/filesystem/AbstractFolder.ts:53

___

### getFolders

▸ **getFolders**(): `Promise`\<[`SPFolder`](SPFolder.md)[]\>

Gets the (sub-)folders within this folder

#### Returns

`Promise`\<[`SPFolder`](SPFolder.md)[]\>

The folders within this folder

**`Example`**

```ts
const folder : SPFolder = await site.getFolder("/Shared Documents");
const folders = await folder.getFolders();
console.log(folders.length); // 2
console.log(folders[0].name); // "Folder 1"
```

**`Example`**

```ts
const partialFolder : PartialFolderByPath = site.getPartialFolderByPath("/Shared Documents");
const folders = await partialFolder.getFolders();
console.log(folders.length); // 2
console.log(folders[0].name); // "Folder 1"
```

**`See`**

[SPFolder.getWithFolders](SPFolder.md#getwithfolders) for a more efficient way to get the folder as well as the folders within it (for partial folders)

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getFolders](AbstractFolder.md#getfolders)

#### Defined in

src/filesystem/AbstractFolder.ts:93

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

[AbstractFolder](AbstractFolder.md).[getRequest](AbstractFolder.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getSubTree

▸ **getSubTree**(): `Promise`\<[`TreeNodeFolder`](../interfaces/TreeNodeFolder.md)\>

Gets this folder and the files and folders within it, in a tree structure. Recursive.

#### Returns

`Promise`\<[`TreeNodeFolder`](../interfaces/TreeNodeFolder.md)\>

The folder and the files and folders within it, in a tree structure

**`Example`**

```ts
const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getSubTree();
console.log(type); // "SP.Folder"
console.log(value.name); // "Shared Documents"
console.log(files.length); // 5
console.log(files[0].type); // "SP.File"
console.log(files[0].value.name); // "MyFile.docx"
console.log(folders.length); // 2
console.log(folders[0].type); // "SP.Folder"
console.log(folders[0].value.name); // "Folder 1"
console.log(folders[0].folders.length) // 1
console.log(folders[0].folders[0].type); // "SP.Folder"
console.log(folders[0].folders[0].value.name); // "Folder 1.1"
```

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getSubTree](AbstractFolder.md#getsubtree)

#### Defined in

src/filesystem/AbstractFolder.ts:188

___

### getWithFiles

▸ **getWithFiles**(): `Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folder`: [`SPFolder`](SPFolder.md)  }\>

Gets this folder and the files within it

#### Returns

`Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folder`: [`SPFolder`](SPFolder.md)  }\>

The folder and the files within it

**`Example`**

```ts
const {folder, files} = await site.getPartialFolder("/Shared Documents").getWithFiles();
console.log(folder.name); // "Shared Documents"
console.log(files.length); // 5
console.log(files[0].name); // "MyFile.docx"
```

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getWithFiles](AbstractFolder.md#getwithfiles)

#### Defined in

src/filesystem/AbstractFolder.ts:68

___

### getWithFilesAndFolders

▸ **getWithFilesAndFolders**(): `Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

Gets this folder and the files and folders within it

#### Returns

`Promise`\<\{ `files`: [`SPFile`](SPFile.md)[] ; `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

The folder and the files and folders within it

**`Example`**

```ts
const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getWithFilesAndFolders();
console.log(folder.name); // "Shared Documents"
console.log(files.length); // 5
console.log(files[0].name); // "MyFile.docx"
console.log(folders.length); // 2
console.log(folders[0].name); // "Folder 1"
```

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getWithFilesAndFolders](AbstractFolder.md#getwithfilesandfolders)

#### Defined in

src/filesystem/AbstractFolder.ts:128

___

### getWithFilesAuthorsAndFolders

▸ **getWithFilesAuthorsAndFolders**(): `Promise`\<\{ `files`: [`FileWithAuthor`](../interfaces/FileWithAuthor.md)[] ; `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

Gets this folder and the files and folders within it, as well as the author of each file.
Note: The author's ID, Title and Email will be included, but the other properties might not.
Note: This will only use one request, but it will be a large request.

#### Returns

`Promise`\<\{ `files`: [`FileWithAuthor`](../interfaces/FileWithAuthor.md)[] ; `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

The folder and the files and folders within it, as well as the author of each file

**`Example`**

```ts
const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getWithFilesAuthorsAndFolders();
console.log(folder.name); // "Shared Documents"
console.log(files.length); // 5
console.log(files[0].file.name); // "MyFile.docx"
console.log(files[0].author.title); // "John Doe"
console.log(folders.length); // 2
console.log(folders[0].name); // "Folder 1"
```

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getWithFilesAuthorsAndFolders](AbstractFolder.md#getwithfilesauthorsandfolders)

#### Defined in

src/filesystem/AbstractFolder.ts:152

___

### getWithFolders

▸ **getWithFolders**(): `Promise`\<\{ `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

Gets this folder and the folders within it

#### Returns

`Promise`\<\{ `folder`: [`SPFolder`](SPFolder.md) ; `folders`: [`SPFolder`](SPFolder.md)[]  }\>

The folder and the folders within it

**`Example`**

```ts
const {folder, folders} = await site.getPartialFolder("/Shared Documents").getWithFolders();
console.log(folder.name); // "Shared Documents"
console.log(folders.length); // 2
console.log(folders[0].name); // "Folder 1"
```

#### Inherited from

[AbstractFolder](AbstractFolder.md).[getWithFolders](AbstractFolder.md#getwithfolders)

#### Defined in

src/filesystem/AbstractFolder.ts:108

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

[AbstractFolder](AbstractFolder.md).[patchRequest](AbstractFolder.md#patchrequest)

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

[AbstractFolder](AbstractFolder.md).[postRequest](AbstractFolder.md#postrequest)

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

[AbstractFolder](AbstractFolder.md).[putRequest](AbstractFolder.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/PartialFolderByPath.ts:19
