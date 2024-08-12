[sharepoint](../README.md) / [Exports](../modules.md) / ExpandedUserInfoItem

# Class: ExpandedUserInfoItem

## Hierarchy

- **`ExpandedUserInfoItem`**

  ↳ [`UserInfoItem`](UserInfoItem.md)

## Table of contents

### Constructors

- [constructor](ExpandedUserInfoItem.md#constructor)

### Properties

- [\_complianceAssetId](ExpandedUserInfoItem.md#_complianceassetid)
- [\_contentTypeId](ExpandedUserInfoItem.md#_contenttypeid)
- [\_created](ExpandedUserInfoItem.md#_created)
- [\_department](ExpandedUserInfoItem.md#_department)
- [\_email](ExpandedUserInfoItem.md#_email)
- [\_firstName](ExpandedUserInfoItem.md#_firstname)
- [\_guid](ExpandedUserInfoItem.md#_guid)
- [\_id](ExpandedUserInfoItem.md#_id)
- [\_jobTitle](ExpandedUserInfoItem.md#_jobtitle)
- [\_lastName](ExpandedUserInfoItem.md#_lastname)
- [\_modified](ExpandedUserInfoItem.md#_modified)
- [\_name](ExpandedUserInfoItem.md#_name)
- [\_oDataUIVersionString](ExpandedUserInfoItem.md#_odatauiversionstring)
- [\_otherMail](ExpandedUserInfoItem.md#_othermail)
- [\_title](ExpandedUserInfoItem.md#_title)
- [\_userName](ExpandedUserInfoItem.md#_username)
- [\_workPhone](ExpandedUserInfoItem.md#_workphone)

### Accessors

- [claimBasedIdentity](ExpandedUserInfoItem.md#claimbasedidentity)
- [complianceAssetId](ExpandedUserInfoItem.md#complianceassetid)
- [contentTypeId](ExpandedUserInfoItem.md#contenttypeid)
- [created](ExpandedUserInfoItem.md#created)
- [department](ExpandedUserInfoItem.md#department)
- [email](ExpandedUserInfoItem.md#email)
- [firstName](ExpandedUserInfoItem.md#firstname)
- [guid](ExpandedUserInfoItem.md#guid)
- [id](ExpandedUserInfoItem.md#id)
- [jobTitle](ExpandedUserInfoItem.md#jobtitle)
- [lastName](ExpandedUserInfoItem.md#lastname)
- [modified](ExpandedUserInfoItem.md#modified)
- [name](ExpandedUserInfoItem.md#name)
- [oDataUIVersionString](ExpandedUserInfoItem.md#odatauiversionstring)
- [otherMail](ExpandedUserInfoItem.md#othermail)
- [title](ExpandedUserInfoItem.md#title)
- [userName](ExpandedUserInfoItem.md#username)
- [workPhone](ExpandedUserInfoItem.md#workphone)

### Methods

- [toJSON](ExpandedUserInfoItem.md#tojson)
- [FromResponse](ExpandedUserInfoItem.md#fromresponse)

## Constructors

### constructor

• **new ExpandedUserInfoItem**(`id`, `contentTypeId`, `title`, `complianceAssetId`, `name`, `email`, `otherMail`, `department`, `jobTitle`, `firstName`, `lastName`, `workPhone`, `userName`, `modified`, `created`, `oDataUIVersionString`, `guid`): [`ExpandedUserInfoItem`](ExpandedUserInfoItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `contentTypeId` | `string` |
| `title` | `string` |
| `complianceAssetId` | `string` |
| `name` | `string` |
| `email` | `string` |
| `otherMail` | `string` |
| `department` | `string` |
| `jobTitle` | `string` |
| `firstName` | `string` |
| `lastName` | `string` |
| `workPhone` | `string` |
| `userName` | `string` |
| `modified` | `string` |
| `created` | `string` |
| `oDataUIVersionString` | `string` |
| `guid` | `string` |

#### Returns

[`ExpandedUserInfoItem`](ExpandedUserInfoItem.md)

#### Defined in

src/user/ExpandedUserInfoItem.ts:23

## Properties

### \_complianceAssetId

• `Private` `Readonly` **\_complianceAssetId**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:8

___

### \_contentTypeId

• `Private` `Readonly` **\_contentTypeId**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:6

___

### \_created

• `Private` `Readonly` **\_created**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:19

___

### \_department

• `Private` `Readonly` **\_department**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:12

___

### \_email

• `Private` `Readonly` **\_email**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:10

___

### \_firstName

• `Private` `Readonly` **\_firstName**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:14

___

### \_guid

• `Private` `Readonly` **\_guid**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:21

___

### \_id

• `Private` `Readonly` **\_id**: `number`

#### Defined in

src/user/ExpandedUserInfoItem.ts:5

___

### \_jobTitle

• `Private` `Readonly` **\_jobTitle**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:13

___

### \_lastName

• `Private` `Readonly` **\_lastName**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:15

___

### \_modified

• `Private` `Readonly` **\_modified**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:18

___

### \_name

• `Private` `Readonly` **\_name**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:9

___

### \_oDataUIVersionString

• `Private` `Readonly` **\_oDataUIVersionString**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:20

___

### \_otherMail

• `Private` `Readonly` **\_otherMail**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:11

___

### \_title

• `Private` `Readonly` **\_title**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:7

___

### \_userName

• `Private` `Readonly` **\_userName**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:17

___

### \_workPhone

• `Private` `Readonly` **\_workPhone**: `string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:16

## Accessors

### claimBasedIdentity

• `get` **claimBasedIdentity**(): [`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Returns

[`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Defined in

src/user/ExpandedUserInfoItem.ts:105

___

### complianceAssetId

• `get` **complianceAssetId**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:97

___

### contentTypeId

• `get` **contentTypeId**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:89

___

### created

• `get` **created**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:145

___

### department

• `get` **department**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:117

___

### email

• `get` **email**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:109

___

### firstName

• `get` **firstName**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:125

___

### guid

• `get` **guid**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:153

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

src/user/ExpandedUserInfoItem.ts:85

___

### jobTitle

• `get` **jobTitle**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:121

___

### lastName

• `get` **lastName**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:129

___

### modified

• `get` **modified**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:141

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:101

___

### oDataUIVersionString

• `get` **oDataUIVersionString**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:149

___

### otherMail

• `get` **otherMail**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:113

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:93

___

### userName

• `get` **userName**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:137

___

### workPhone

• `get` **workPhone**(): `string`

#### Returns

`string`

#### Defined in

src/user/ExpandedUserInfoItem.ts:133

## Methods

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/user/ExpandedUserInfoItem.ts:157

___

### FromResponse

▸ **FromResponse**(`response`): [`ExpandedUserInfoItem`](ExpandedUserInfoItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`ExpandedUserInfoItemResponse`](../interfaces/ExpandedUserInfoItemResponse.md) |

#### Returns

[`ExpandedUserInfoItem`](ExpandedUserInfoItem.md)

#### Defined in

src/user/ExpandedUserInfoItem.ts:61
