[sharepoint](../README.md) / [Exports](../modules.md) / UserInfoItem

# Class: UserInfoItem

## Hierarchy

- [`ExpandedUserInfoItem`](ExpandedUserInfoItem.md)

  ↳ **`UserInfoItem`**

## Table of contents

### Constructors

- [constructor](UserInfoItem.md#constructor)

### Properties

- [\_attachments](UserInfoItem.md#_attachments)
- [\_authorId](UserInfoItem.md#_authorid)
- [\_deleted](UserInfoItem.md#_deleted)
- [\_editorId](UserInfoItem.md#_editorid)
- [\_isSiteAdmin](UserInfoItem.md#_issiteadmin)
- [\_picture](UserInfoItem.md#_picture)
- [\_serverRedirectedEmbedUri](UserInfoItem.md#_serverredirectedembeduri)
- [\_serverRedirectedEmbedUrl](UserInfoItem.md#_serverredirectedembedurl)
- [\_userInfoHidden](UserInfoItem.md#_userinfohidden)
- [\_webSite](UserInfoItem.md#_website)

### Accessors

- [attachments](UserInfoItem.md#attachments)
- [authorId](UserInfoItem.md#authorid)
- [claimBasedIdentity](UserInfoItem.md#claimbasedidentity)
- [complianceAssetId](UserInfoItem.md#complianceassetid)
- [contentTypeId](UserInfoItem.md#contenttypeid)
- [created](UserInfoItem.md#created)
- [deleted](UserInfoItem.md#deleted)
- [department](UserInfoItem.md#department)
- [editorId](UserInfoItem.md#editorid)
- [email](UserInfoItem.md#email)
- [firstName](UserInfoItem.md#firstname)
- [guid](UserInfoItem.md#guid)
- [id](UserInfoItem.md#id)
- [isSiteAdmin](UserInfoItem.md#issiteadmin)
- [jobTitle](UserInfoItem.md#jobtitle)
- [lastName](UserInfoItem.md#lastname)
- [modified](UserInfoItem.md#modified)
- [name](UserInfoItem.md#name)
- [oDataUIVersionString](UserInfoItem.md#odatauiversionstring)
- [otherMail](UserInfoItem.md#othermail)
- [picture](UserInfoItem.md#picture)
- [serverRedirectedEmbedUri](UserInfoItem.md#serverredirectedembeduri)
- [serverRedirectedEmbedUrl](UserInfoItem.md#serverredirectedembedurl)
- [title](UserInfoItem.md#title)
- [userInfoHidden](UserInfoItem.md#userinfohidden)
- [userName](UserInfoItem.md#username)
- [webSite](UserInfoItem.md#website)
- [workPhone](UserInfoItem.md#workphone)

### Methods

- [toJSON](UserInfoItem.md#tojson)
- [FromResponse](UserInfoItem.md#fromresponse)

## Constructors

### constructor

• **new UserInfoItem**(`id`, `serverRedirectedEmbedUri`, `serverRedirectedEmbedUrl`, `contentTypeId`, `title`, `complianceAssetId`, `name`, `email`, `otherMail`, `isSiteAdmin`, `deleted`, `userInfoHidden`, `picture`, `department`, `jobTitle`, `firstName`, `lastName`, `workPhone`, `userName`, `webSite`, `modified`, `created`, `authorId`, `editorId`, `oDataUIVersionString`, `attachments`, `guid`): [`UserInfoItem`](UserInfoItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `serverRedirectedEmbedUri` | `string` |
| `serverRedirectedEmbedUrl` | `string` |
| `contentTypeId` | `string` |
| `title` | `string` |
| `complianceAssetId` | `string` |
| `name` | `string` |
| `email` | `string` |
| `otherMail` | `string` |
| `isSiteAdmin` | `boolean` |
| `deleted` | `boolean` |
| `userInfoHidden` | `boolean` |
| `picture` | `Object` |
| `picture.description` | `string` |
| `picture.url` | `string` |
| `department` | `string` |
| `jobTitle` | `string` |
| `firstName` | `string` |
| `lastName` | `string` |
| `workPhone` | `string` |
| `userName` | `string` |
| `webSite` | `string` |
| `modified` | `string` |
| `created` | `string` |
| `authorId` | `number` |
| `editorId` | `number` |
| `oDataUIVersionString` | `string` |
| `attachments` | `boolean` |
| `guid` | `string` |

#### Returns

[`UserInfoItem`](UserInfoItem.md)

#### Overrides

[ExpandedUserInfoItem](ExpandedUserInfoItem.md).[constructor](ExpandedUserInfoItem.md#constructor)

#### Defined in

src/user/UserInfoItem.ts:19

## Properties

### \_attachments

• `Private` `Readonly` **\_attachments**: `boolean`

#### Defined in

src/user/UserInfoItem.ts:17

___

### \_authorId

• `Private` `Readonly` **\_authorId**: `number`

#### Defined in

src/user/UserInfoItem.ts:15

___

### \_deleted

• `Private` `Readonly` **\_deleted**: `boolean`

#### Defined in

src/user/UserInfoItem.ts:8

___

### \_editorId

• `Private` `Readonly` **\_editorId**: `number`

#### Defined in

src/user/UserInfoItem.ts:16

___

### \_isSiteAdmin

• `Private` `Readonly` **\_isSiteAdmin**: `boolean`

#### Defined in

src/user/UserInfoItem.ts:7

___

### \_picture

• `Private` `Readonly` **\_picture**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `url` | `string` |

#### Defined in

src/user/UserInfoItem.ts:10

___

### \_serverRedirectedEmbedUri

• `Private` `Readonly` **\_serverRedirectedEmbedUri**: `string`

#### Defined in

src/user/UserInfoItem.ts:5

___

### \_serverRedirectedEmbedUrl

• `Private` `Readonly` **\_serverRedirectedEmbedUrl**: `string`

#### Defined in

src/user/UserInfoItem.ts:6

___

### \_userInfoHidden

• `Private` `Readonly` **\_userInfoHidden**: `boolean`

#### Defined in

src/user/UserInfoItem.ts:9

___

### \_webSite

• `Private` `Readonly` **\_webSite**: `string`

#### Defined in

src/user/UserInfoItem.ts:14

## Accessors

### attachments

• `get` **attachments**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/user/UserInfoItem.ts:139

___

### authorId

• `get` **authorId**(): `number`

#### Returns

`number`

#### Defined in

src/user/UserInfoItem.ts:131

___

### claimBasedIdentity

• `get` **claimBasedIdentity**(): [`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Returns

[`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Inherited from

ExpandedUserInfoItem.claimBasedIdentity

#### Defined in

src/user/ExpandedUserInfoItem.ts:105

___

### complianceAssetId

• `get` **complianceAssetId**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.complianceAssetId

#### Defined in

src/user/ExpandedUserInfoItem.ts:97

___

### contentTypeId

• `get` **contentTypeId**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.contentTypeId

#### Defined in

src/user/ExpandedUserInfoItem.ts:89

___

### created

• `get` **created**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.created

#### Defined in

src/user/ExpandedUserInfoItem.ts:145

___

### deleted

• `get` **deleted**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/user/UserInfoItem.ts:112

___

### department

• `get` **department**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.department

#### Defined in

src/user/ExpandedUserInfoItem.ts:117

___

### editorId

• `get` **editorId**(): `number`

#### Returns

`number`

#### Defined in

src/user/UserInfoItem.ts:135

___

### email

• `get` **email**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.email

#### Defined in

src/user/ExpandedUserInfoItem.ts:109

___

### firstName

• `get` **firstName**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.firstName

#### Defined in

src/user/ExpandedUserInfoItem.ts:125

___

### guid

• `get` **guid**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.guid

#### Defined in

src/user/ExpandedUserInfoItem.ts:153

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Inherited from

ExpandedUserInfoItem.id

#### Defined in

src/user/ExpandedUserInfoItem.ts:85

___

### isSiteAdmin

• `get` **isSiteAdmin**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/user/UserInfoItem.ts:108

___

### jobTitle

• `get` **jobTitle**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.jobTitle

#### Defined in

src/user/ExpandedUserInfoItem.ts:121

___

### lastName

• `get` **lastName**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.lastName

#### Defined in

src/user/ExpandedUserInfoItem.ts:129

___

### modified

• `get` **modified**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.modified

#### Defined in

src/user/ExpandedUserInfoItem.ts:141

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.name

#### Defined in

src/user/ExpandedUserInfoItem.ts:101

___

### oDataUIVersionString

• `get` **oDataUIVersionString**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.oDataUIVersionString

#### Defined in

src/user/ExpandedUserInfoItem.ts:149

___

### otherMail

• `get` **otherMail**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.otherMail

#### Defined in

src/user/ExpandedUserInfoItem.ts:113

___

### picture

• `get` **picture**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `url` | `string` |

#### Defined in

src/user/UserInfoItem.ts:120

___

### serverRedirectedEmbedUri

• `get` **serverRedirectedEmbedUri**(): `string`

#### Returns

`string`

#### Defined in

src/user/UserInfoItem.ts:100

___

### serverRedirectedEmbedUrl

• `get` **serverRedirectedEmbedUrl**(): `string`

#### Returns

`string`

#### Defined in

src/user/UserInfoItem.ts:104

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.title

#### Defined in

src/user/ExpandedUserInfoItem.ts:93

___

### userInfoHidden

• `get` **userInfoHidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/user/UserInfoItem.ts:116

___

### userName

• `get` **userName**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.userName

#### Defined in

src/user/ExpandedUserInfoItem.ts:137

___

### webSite

• `get` **webSite**(): `string`

#### Returns

`string`

#### Defined in

src/user/UserInfoItem.ts:127

___

### workPhone

• `get` **workPhone**(): `string`

#### Returns

`string`

#### Inherited from

ExpandedUserInfoItem.workPhone

#### Defined in

src/user/ExpandedUserInfoItem.ts:133

## Methods

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Overrides

[ExpandedUserInfoItem](ExpandedUserInfoItem.md).[toJSON](ExpandedUserInfoItem.md#tojson)

#### Defined in

src/user/UserInfoItem.ts:143

___

### FromResponse

▸ **FromResponse**(`response`): [`UserInfoItem`](UserInfoItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`UserInfoItemResponse`](../interfaces/UserInfoItemResponse.md) |

#### Returns

[`UserInfoItem`](UserInfoItem.md)

#### Overrides

[ExpandedUserInfoItem](ExpandedUserInfoItem.md).[FromResponse](ExpandedUserInfoItem.md#fromresponse)

#### Defined in

src/user/UserInfoItem.ts:64
