[sharepoint](../README.md) / [Exports](../modules.md) / ListItem

# Class: ListItem\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Hierarchy

- [`AbstractListItem`](AbstractListItem.md)\<`T`\>

  ↳ **`ListItem`**

## Table of contents

### Constructors

- [constructor](ListItem.md#constructor)

### Properties

- [\_attachments](ListItem.md#_attachments)
- [\_authorId](ListItem.md#_authorid)
- [\_checkoutUserId](ListItem.md#_checkoutuserid)
- [\_complianceAssetId](ListItem.md#_complianceassetid)
- [\_contentTypeId](ListItem.md#_contenttypeid)
- [\_created](ListItem.md#_created)
- [\_editorId](ListItem.md#_editorid)
- [\_fileSystemObjectType](ListItem.md#_filesystemobjecttype)
- [\_guid](ListItem.md#_guid)
- [\_id](ListItem.md#_id)
- [\_list](ListItem.md#_list)
- [\_modified](ListItem.md#_modified)
- [\_serverRedirectedEmbedUri](ListItem.md#_serverredirectedembeduri)
- [\_serverRedirectedEmbedUrl](ListItem.md#_serverredirectedembedurl)
- [\_title](ListItem.md#_title)

### Accessors

- [attachments](ListItem.md#attachments)
- [authorId](ListItem.md#authorid)
- [baseUrl](ListItem.md#baseurl)
- [checkoutUserId](ListItem.md#checkoutuserid)
- [complianceAssetId](ListItem.md#complianceassetid)
- [contentTypeId](ListItem.md#contenttypeid)
- [created](ListItem.md#created)
- [editorId](ListItem.md#editorid)
- [fileSystemObjectType](ListItem.md#filesystemobjecttype)
- [guid](ListItem.md#guid)
- [id](ListItem.md#id)
- [list](ListItem.md#list)
- [modified](ListItem.md#modified)
- [serverRedirectedEmbedUri](ListItem.md#serverredirectedembeduri)
- [serverRedirectedEmbedUrl](ListItem.md#serverredirectedembedurl)
- [title](ListItem.md#title)

### Methods

- [deleteRequest](ListItem.md#deleterequest)
- [dontThrowFor](ListItem.md#dontthrowfor)
- [get](ListItem.md#get)
- [getAttachmentFiles](ListItem.md#getattachmentfiles)
- [getAuth](ListItem.md#getauth)
- [getAuthor](ListItem.md#getauthor)
- [getCheckoutUser](ListItem.md#getcheckoutuser)
- [getContentType](ListItem.md#getcontenttype)
- [getEditor](ListItem.md#geteditor)
- [getFile](ListItem.md#getfile)
- [getFolder](ListItem.md#getfolder)
- [getRequest](ListItem.md#getrequest)
- [getWithAuthor](ListItem.md#getwithauthor)
- [getWithFileOrFolder](ListItem.md#getwithfileorfolder)
- [patchRequest](ListItem.md#patchrequest)
- [postRequest](ListItem.md#postrequest)
- [putRequest](ListItem.md#putrequest)
- [toJSON](ListItem.md#tojson)
- [FromResponse](ListItem.md#fromresponse)

## Constructors

### constructor

• **new ListItem**\<`T`\>(`list`, `id`, `title`, `guid`, `created`, `modified`, `authorId`, `fileSystemObjectType`, `serverRedirectedEmbedUri`, `serverRedirectedEmbedUrl`, `contentTypeId`, `complianceAssetId`, `editorId`, `attachments`, `checkoutUserId?`): [`ListItem`](ListItem.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `id` | `number` |
| `title` | `string` |
| `guid` | `string` |
| `created` | `Date` |
| `modified` | `Date` |
| `authorId` | `number` |
| `fileSystemObjectType` | [`FileSystemObjectType`](../enums/FileSystemObjectType.md) |
| `serverRedirectedEmbedUri` | `string` |
| `serverRedirectedEmbedUrl` | `string` |
| `contentTypeId` | `string` |
| `complianceAssetId` | `string` |
| `editorId` | `number` |
| `attachments` | `boolean` |
| `checkoutUserId?` | `number` |

#### Returns

[`ListItem`](ListItem.md)\<`T`\>

#### Overrides

[AbstractListItem](AbstractListItem.md).[constructor](AbstractListItem.md#constructor)

#### Defined in

src/list/ListItem.ts:175

## Properties

### \_attachments

• `Private` `Readonly` **\_attachments**: `boolean`

#### Defined in

src/list/ListItem.ts:173

___

### \_authorId

• `Private` `Readonly` **\_authorId**: `number`

#### Defined in

src/list/ListItem.ts:165

___

### \_checkoutUserId

• `Private` `Optional` `Readonly` **\_checkoutUserId**: `number`

#### Defined in

src/list/ListItem.ts:172

___

### \_complianceAssetId

• `Private` `Readonly` **\_complianceAssetId**: `string`

#### Defined in

src/list/ListItem.ts:170

___

### \_contentTypeId

• `Private` `Readonly` **\_contentTypeId**: `string`

#### Defined in

src/list/ListItem.ts:169

___

### \_created

• `Private` `Readonly` **\_created**: `Date`

#### Defined in

src/list/ListItem.ts:163

___

### \_editorId

• `Private` `Readonly` **\_editorId**: `number`

#### Defined in

src/list/ListItem.ts:171

___

### \_fileSystemObjectType

• `Private` `Readonly` **\_fileSystemObjectType**: [`FileSystemObjectType`](../enums/FileSystemObjectType.md)

#### Defined in

src/list/ListItem.ts:166

___

### \_guid

• `Private` `Readonly` **\_guid**: `string`

#### Defined in

src/list/ListItem.ts:162

___

### \_id

• `Private` `Readonly` **\_id**: `number`

#### Defined in

src/list/ListItem.ts:160

___

### \_list

• `Protected` `Readonly` **\_list**: `T`

#### Inherited from

[AbstractListItem](AbstractListItem.md).[_list](AbstractListItem.md#_list)

#### Defined in

src/list/ListItem.ts:67

___

### \_modified

• `Private` `Readonly` **\_modified**: `Date`

#### Defined in

src/list/ListItem.ts:164

___

### \_serverRedirectedEmbedUri

• `Private` `Readonly` **\_serverRedirectedEmbedUri**: `string`

#### Defined in

src/list/ListItem.ts:167

___

### \_serverRedirectedEmbedUrl

• `Private` `Readonly` **\_serverRedirectedEmbedUrl**: `string`

#### Defined in

src/list/ListItem.ts:168

___

### \_title

• `Private` `Readonly` **\_title**: `string`

#### Defined in

src/list/ListItem.ts:161

## Accessors

### attachments

• `get` **attachments**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/ListItem.ts:300

___

### authorId

• `get` **authorId**(): `number`

#### Returns

`number`

#### Defined in

src/list/ListItem.ts:258

___

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractListItem.baseUrl

#### Defined in

src/list/ListItem.ts:193

___

### checkoutUserId

• `get` **checkoutUserId**(): `number`

#### Returns

`number`

#### Defined in

src/list/ListItem.ts:296

___

### complianceAssetId

• `get` **complianceAssetId**(): `string`

#### Returns

`string`

#### Defined in

src/list/ListItem.ts:288

___

### contentTypeId

• `get` **contentTypeId**(): `string`

#### Returns

`string`

#### Defined in

src/list/ListItem.ts:284

___

### created

• `get` **created**(): `Date`

#### Returns

`Date`

#### Defined in

src/list/ListItem.ts:250

___

### editorId

• `get` **editorId**(): `number`

#### Returns

`number`

#### Defined in

src/list/ListItem.ts:292

___

### fileSystemObjectType

• `get` **fileSystemObjectType**(): [`FileSystemObjectType`](../enums/FileSystemObjectType.md)

#### Returns

[`FileSystemObjectType`](../enums/FileSystemObjectType.md)

#### Defined in

src/list/ListItem.ts:262

___

### guid

• `get` **guid**(): `string`

#### Returns

`string`

#### Defined in

src/list/ListItem.ts:246

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

src/list/ListItem.ts:238

___

### list

• `get` **list**(): `T`

#### Returns

`T`

#### Inherited from

AbstractListItem.list

#### Defined in

src/list/ListItem.ts:82

___

### modified

• `get` **modified**(): `Date`

#### Returns

`Date`

#### Defined in

src/list/ListItem.ts:254

___

### serverRedirectedEmbedUri

• `get` **serverRedirectedEmbedUri**(): `string`

Returns the server redirected embed uri

#### Returns

`string`

the server redirected embed uri

#### Defined in

src/list/ListItem.ts:270

___

### serverRedirectedEmbedUrl

• `get` **serverRedirectedEmbedUrl**(): `string`

Returns the server redirected embed url

#### Returns

`string`

the server redirected embed url

**`Description`**

This will never be null, but it may be empty

#### Defined in

src/list/ListItem.ts:280

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Defined in

src/list/ListItem.ts:242

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

#### Overrides

[AbstractListItem](AbstractListItem.md).[get](AbstractListItem.md#get)

#### Defined in

src/list/ListItem.ts:218

___

### getAttachmentFiles

▸ **getAttachmentFiles**(): `Promise`\<[`SPFile`](SPFile.md)[]\>

Returns the attachment files of this list item

#### Returns

`Promise`\<[`SPFile`](SPFile.md)[]\>

**`Throws`**

empty array if this item's "attachments" is not true
or the list does not have attachments enabled

#### Overrides

[AbstractListItem](AbstractListItem.md).[getAttachmentFiles](AbstractListItem.md#getattachmentfiles)

#### Defined in

src/list/ListItem.ts:227

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

#### Overrides

[AbstractListItem](AbstractListItem.md).[getCheckoutUser](AbstractListItem.md#getcheckoutuser)

#### Defined in

src/list/ListItem.ts:234

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

src/list/ListItem.ts:304

___

### FromResponse

▸ **FromResponse**\<`T`\>(`list`, `response`): [`ListItem`](ListItem.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `response` | [`ListItemResponse`](../interfaces/ListItemResponse.md) |

#### Returns

[`ListItem`](ListItem.md)\<`T`\>

#### Defined in

src/list/ListItem.ts:197
