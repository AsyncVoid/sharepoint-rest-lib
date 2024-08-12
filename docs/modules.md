[sharepoint](README.md) / Exports

# sharepoint

## Table of contents

### Enumerations

- [ChangeQueryType](enums/ChangeQueryType.md)
- [ChangeType](enums/ChangeType.md)
- [CheckInType](enums/CheckInType.md)
- [CheckOutType](enums/CheckOutType.md)
- [ClaimType](enums/ClaimType.md)
- [ClaimValueType](enums/ClaimValueType.md)
- [ErrorKind](enums/ErrorKind.md)
- [FileSystemObjectType](enums/FileSystemObjectType.md)
- [SPFileLevel](enums/SPFileLevel.md)
- [SPMoveOperations](enums/SPMoveOperations.md)

### Classes

- [AbstractFile](classes/AbstractFile.md)
- [AbstractFolder](classes/AbstractFolder.md)
- [AbstractList](classes/AbstractList.md)
- [AbstractListItem](classes/AbstractListItem.md)
- [AbstractWebhookSubscription](classes/AbstractWebhookSubscription.md)
- [CertificateAuthenticator](classes/CertificateAuthenticator.md)
- [ChangeItem](classes/ChangeItem.md)
- [ChangeList](classes/ChangeList.md)
- [ChangeToken](classes/ChangeToken.md)
- [ClaimBasedIdentity](classes/ClaimBasedIdentity.md)
- [ClientSecretAuthenticator](classes/ClientSecretAuthenticator.md)
- [ExpandedUserInfoItem](classes/ExpandedUserInfoItem.md)
- [List](classes/List.md)
- [ListItem](classes/ListItem.md)
- [PartialFile](classes/PartialFile.md)
- [PartialFolderById](classes/PartialFolderById.md)
- [PartialFolderByPath](classes/PartialFolderByPath.md)
- [PartialListById](classes/PartialListById.md)
- [PartialListByTitle](classes/PartialListByTitle.md)
- [PartialListItemById](classes/PartialListItemById.md)
- [RequestSender](classes/RequestSender.md)
- [SPError](classes/SPError.md)
- [SPFile](classes/SPFile.md)
- [SPFileSystemEntry](classes/SPFileSystemEntry.md)
- [SPFolder](classes/SPFolder.md)
- [SPPath](classes/SPPath.md)
- [Site](classes/Site.md)
- [Tenant](classes/Tenant.md)
- [UserInfoItem](classes/UserInfoItem.md)
- [WebhookSubscription](classes/WebhookSubscription.md)

### Interfaces

- [Authenticator](interfaces/Authenticator.md)
- [ChangeItemResponse](interfaces/ChangeItemResponse.md)
- [ChangeListResponse](interfaces/ChangeListResponse.md)
- [ChangeTokenResponse](interfaces/ChangeTokenResponse.md)
- [ExpandedUserInfoItemResponse](interfaces/ExpandedUserInfoItemResponse.md)
- [FileResponse](interfaces/FileResponse.md)
- [FileWithAuthor](interfaces/FileWithAuthor.md)
- [FileWithAuthorResponse](interfaces/FileWithAuthorResponse.md)
- [FolderResponse](interfaces/FolderResponse.md)
- [HasServerRelativeUrl](interfaces/HasServerRelativeUrl.md)
- [IFileSystemEntry](interfaces/IFileSystemEntry.md)
- [ListItemResponse](interfaces/ListItemResponse.md)
- [ListItemWithAuthor](interfaces/ListItemWithAuthor.md)
- [ListItemWithAuthorResponse](interfaces/ListItemWithAuthorResponse.md)
- [ListItemWithFileOrFolder](interfaces/ListItemWithFileOrFolder.md)
- [ListItemWithFileOrFolderResponse](interfaces/ListItemWithFileOrFolderResponse.md)
- [ListResponse](interfaces/ListResponse.md)
- [OData](interfaces/OData.md)
- [PathResponse](interfaces/PathResponse.md)
- [SPErrorInfo](interfaces/SPErrorInfo.md)
- [TreeNodeFile](interfaces/TreeNodeFile.md)
- [TreeNodeFolder](interfaces/TreeNodeFolder.md)
- [UserInfoItemResponse](interfaces/UserInfoItemResponse.md)
- [WebhookContentResponse](interfaces/WebhookContentResponse.md)
- [WebhookNotificationResponse](interfaces/WebhookNotificationResponse.md)
- [WebhookSubscriptionResponse](interfaces/WebhookSubscriptionResponse.md)

### Type Aliases

- [PathLike](modules.md#pathlike)
- [UserInfoItemKey](modules.md#userinfoitemkey)

### Variables

- [ALL\_CHANGE\_TYPES](modules.md#all_change_types)
- [ClaimTypeNames](modules.md#claimtypenames)
- [ClaimValueTypeNames](modules.md#claimvaluetypenames)
- [ExpansionUserInfoItemKeys](modules.md#expansionuserinfoitemkeys)

### Functions

- [hasServerRelativeUrl](modules.md#hasserverrelativeurl)

## Type Aliases

### PathLike

Ƭ **PathLike**: `string` \| [`SPPath`](classes/SPPath.md) \| [`SPFolder`](classes/SPFolder.md) \| [`SPFile`](classes/SPFile.md) \| [`PartialFile`](classes/PartialFile.md) \| [`HasServerRelativeUrl`](interfaces/HasServerRelativeUrl.md)

A path to a file or folder

#### Defined in

src/filesystem/SPPath.ts:14

___

### UserInfoItemKey

Ƭ **UserInfoItemKey**: keyof [`UserInfoItemResponse`](interfaces/UserInfoItemResponse.md)

#### Defined in

src/user/UserInfoItemResponse.ts:27

## Variables

### ALL\_CHANGE\_TYPES

• `Const` **ALL\_CHANGE\_TYPES**: [`ChangeQueryType`](enums/ChangeQueryType.md)[]

#### Defined in

src/change/ChangeQueryType.ts:16

___

### ClaimTypeNames

• `Const` **ClaimTypeNames**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `!` | `string` |
| `"` | `string` |
| `#` | `string` |
| `$` | `string` |
| `%` | `string` |
| `&` | `string` |
| `'` | `string` |
| `(` | `string` |
| `)` | `string` |
| `*` | `string` |
| `+` | `string` |
| `-` | `string` |
| `.` | `string` |
| `/` | `string` |
| `0` | `string` |
| `1` | `string` |
| `2` | `string` |
| `3` | `string` |
| `4` | `string` |
| `5` | `string` |
| `6` | `string` |
| `7` | `string` |
| `8` | `string` |
| `9` | `string` |
| `<` | `string` |
| `=` | `string` |
| `>` | `string` |
| `?` | `string` |
| `@` | `string` |
| `[` | `string` |
| \ | `string` |
| `]` | `string` |
| `^` | `string` |
| `_` | `string` |
| \` | `string` |
| `a` | `string` |
| `b` | `string` |
| `c` | `string` |
| `d` | `string` |
| `e` | `string` |
| `f` | `string` |
| `g` | `string` |
| `h` | `string` |
| `i` | `string` |
| `j` | `string` |
| `k` | `string` |
| `l` | `string` |
| `m` | `string` |
| `n` | `string` |

#### Defined in

src/claim/ClaimType.ts:53

___

### ClaimValueTypeNames

• `Const` **ClaimValueTypeNames**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `!` | `string` |
| `"` | `string` |
| `#` | `string` |
| `$` | `string` |
| `%` | `string` |
| `&` | `string` |
| `'` | `string` |
| `(` | `string` |
| `)` | `string` |
| `*` | `string` |
| `+` | `string` |
| `-` | `string` |
| `.` | `string` |
| `/` | `string` |
| `0` | `string` |
| `1` | `string` |

#### Defined in

src/claim/ClaimValueType.ts:21

___

### ExpansionUserInfoItemKeys

• `Const` **ExpansionUserInfoItemKeys**: [`UserInfoItemKey`](modules.md#userinfoitemkey)[]

#### Defined in

src/user/UserInfoItemResponse.ts:28

## Functions

### hasServerRelativeUrl

▸ **hasServerRelativeUrl**(`object`): object is HasServerRelativeUrl

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is HasServerRelativeUrl

#### Defined in

src/filesystem/HasServerRelativeUrl.ts:1
