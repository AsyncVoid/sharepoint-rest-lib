[sharepoint](../README.md) / [Exports](../modules.md) / ChangeItem

# Class: ChangeItem\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Table of contents

### Constructors

- [constructor](ChangeItem.md#constructor)

### Properties

- [\_changeToken](ChangeItem.md#_changetoken)
- [\_changeType](ChangeItem.md#_changetype)
- [\_editor](ChangeItem.md#_editor)
- [\_editorEmailHint](ChangeItem.md#_editoremailhint)
- [\_itemId](ChangeItem.md#_itemid)
- [\_list](ChangeItem.md#_list)
- [\_listId](ChangeItem.md#_listid)
- [\_serverRelativeUrl](ChangeItem.md#_serverrelativeurl)
- [\_sharedByUser](ChangeItem.md#_sharedbyuser)
- [\_sharedWithUsers](ChangeItem.md#_sharedwithusers)
- [\_siteId](ChangeItem.md#_siteid)
- [\_time](ChangeItem.md#_time)
- [\_uniqueId](ChangeItem.md#_uniqueid)
- [\_webId](ChangeItem.md#_webid)

### Accessors

- [changeToken](ChangeItem.md#changetoken)
- [changeType](ChangeItem.md#changetype)
- [editor](ChangeItem.md#editor)
- [editorEmailHint](ChangeItem.md#editoremailhint)
- [itemId](ChangeItem.md#itemid)
- [list](ChangeItem.md#list)
- [listId](ChangeItem.md#listid)
- [serverRelativeUrl](ChangeItem.md#serverrelativeurl)
- [sharedByUser](ChangeItem.md#sharedbyuser)
- [sharedWithUsers](ChangeItem.md#sharedwithusers)
- [siteId](ChangeItem.md#siteid)
- [time](ChangeItem.md#time)
- [uniqueId](ChangeItem.md#uniqueid)
- [webId](ChangeItem.md#webid)

### Methods

- [getListItem](ChangeItem.md#getlistitem)
- [getListItemWithFileOrFolder](ChangeItem.md#getlistitemwithfileorfolder)
- [getPartialListItem](ChangeItem.md#getpartiallistitem)
- [toJSON](ChangeItem.md#tojson)
- [FromResponse](ChangeItem.md#fromresponse)

## Constructors

### constructor

• **new ChangeItem**\<`T`\>(`list`, `changeToken`, `changeType`, `siteId`, `time`, `editor`, `editorEmailHint`, `itemId`, `listId`, `serverRelativeUrl`, `sharedByUser`, `sharedWithUsers`, `uniqueId`, `webId`): [`ChangeItem`](ChangeItem.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `changeToken` | [`ChangeToken`](ChangeToken.md) |
| `changeType` | [`ChangeType`](../enums/ChangeType.md) |
| `siteId` | `string` |
| `time` | `Date` |
| `editor` | `string` |
| `editorEmailHint` | ``null`` |
| `itemId` | `number` |
| `listId` | `string` |
| `serverRelativeUrl` | `string` |
| `sharedByUser` | ``null`` |
| `sharedWithUsers` | ``null`` |
| `uniqueId` | `string` |
| `webId` | `string` |

#### Returns

[`ChangeItem`](ChangeItem.md)\<`T`\>

#### Defined in

src/change/ChangeItem.ts:22

## Properties

### \_changeToken

• `Private` `Readonly` **\_changeToken**: [`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeItem.ts:8

___

### \_changeType

• `Private` `Readonly` **\_changeType**: [`ChangeType`](../enums/ChangeType.md)

#### Defined in

src/change/ChangeItem.ts:9

___

### \_editor

• `Private` `Readonly` **\_editor**: `string`

#### Defined in

src/change/ChangeItem.ts:11

___

### \_editorEmailHint

• `Private` `Readonly` **\_editorEmailHint**: ``null``

#### Defined in

src/change/ChangeItem.ts:12

___

### \_itemId

• `Private` `Optional` `Readonly` **\_itemId**: `number`

#### Defined in

src/change/ChangeItem.ts:14

___

### \_list

• `Private` `Readonly` **\_list**: `T`

#### Defined in

src/change/ChangeItem.ts:7

___

### \_listId

• `Private` `Optional` `Readonly` **\_listId**: `string`

#### Defined in

src/change/ChangeItem.ts:15

___

### \_serverRelativeUrl

• `Private` `Readonly` **\_serverRelativeUrl**: `string`

#### Defined in

src/change/ChangeItem.ts:17

___

### \_sharedByUser

• `Private` `Readonly` **\_sharedByUser**: ``null``

#### Defined in

src/change/ChangeItem.ts:18

___

### \_sharedWithUsers

• `Private` `Readonly` **\_sharedWithUsers**: ``null``

#### Defined in

src/change/ChangeItem.ts:19

___

### \_siteId

• `Private` `Optional` `Readonly` **\_siteId**: `string`

#### Defined in

src/change/ChangeItem.ts:13

___

### \_time

• `Private` `Readonly` **\_time**: `Date`

#### Defined in

src/change/ChangeItem.ts:10

___

### \_uniqueId

• `Private` `Readonly` **\_uniqueId**: `string`

#### Defined in

src/change/ChangeItem.ts:20

___

### \_webId

• `Private` `Optional` `Readonly` **\_webId**: `string`

#### Defined in

src/change/ChangeItem.ts:16

## Accessors

### changeToken

• `get` **changeToken**(): [`ChangeToken`](ChangeToken.md)

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeItem.ts:58

___

### changeType

• `get` **changeType**(): [`ChangeType`](../enums/ChangeType.md)

#### Returns

[`ChangeType`](../enums/ChangeType.md)

#### Defined in

src/change/ChangeItem.ts:62

___

### editor

• `get` **editor**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:78

___

### editorEmailHint

• `get` **editorEmailHint**(): ``null``

#### Returns

``null``

#### Defined in

src/change/ChangeItem.ts:82

___

### itemId

• `get` **itemId**(): `number`

#### Returns

`number`

#### Defined in

src/change/ChangeItem.ts:86

___

### list

• `get` **list**(): `T`

#### Returns

`T`

#### Defined in

src/change/ChangeItem.ts:114

___

### listId

• `get` **listId**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:90

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:94

___

### sharedByUser

• `get` **sharedByUser**(): ``null``

#### Returns

``null``

#### Defined in

src/change/ChangeItem.ts:98

___

### sharedWithUsers

• `get` **sharedWithUsers**(): ``null``

#### Returns

``null``

#### Defined in

src/change/ChangeItem.ts:102

___

### siteId

• `get` **siteId**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:66

___

### time

• `get` **time**(): `Date`

The date and time of the change.
Same as the changeToken's time, but only precise to the second.

#### Returns

`Date`

#### Defined in

src/change/ChangeItem.ts:74

___

### uniqueId

• `get` **uniqueId**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:106

___

### webId

• `get` **webId**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeItem.ts:110

## Methods

### getListItem

▸ **getListItem**(): `Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<`T`\>\>

#### Defined in

src/change/ChangeItem.ts:118

___

### getListItemWithFileOrFolder

▸ **getListItemWithFileOrFolder**(): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<`T`\>\>

#### Defined in

src/change/ChangeItem.ts:126

___

### getPartialListItem

▸ **getPartialListItem**(): [`PartialListItemById`](PartialListItemById.md)\<`T`\>

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<`T`\>

#### Defined in

src/change/ChangeItem.ts:122

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/change/ChangeItem.ts:130

___

### FromResponse

▸ **FromResponse**\<`T`\>(`list`, `response`): [`ChangeItem`](ChangeItem.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `response` | [`ChangeItemResponse`](../interfaces/ChangeItemResponse.md) |

#### Returns

[`ChangeItem`](ChangeItem.md)\<`T`\>

#### Defined in

src/change/ChangeItem.ts:39
