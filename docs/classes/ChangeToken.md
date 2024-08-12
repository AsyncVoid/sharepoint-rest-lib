[sharepoint](../README.md) / [Exports](../modules.md) / ChangeToken

# Class: ChangeToken

Completely immutable, adding time will create a new ChangeToken

## Table of contents

### Constructors

- [constructor](ChangeToken.md#constructor)

### Properties

- [\_changeNumber](ChangeToken.md#_changenumber)
- [\_changeTimeTicks](ChangeToken.md#_changetimeticks)
- [\_scopeGUID](ChangeToken.md#_scopeguid)
- [\_scopeKind](ChangeToken.md#_scopekind)
- [\_version](ChangeToken.md#_version)

### Accessors

- [changeNumber](ChangeToken.md#changenumber)
- [changeTimeTicks](ChangeToken.md#changetimeticks)
- [scopeGUID](ChangeToken.md#scopeguid)
- [scopeKind](ChangeToken.md#scopekind)
- [version](ChangeToken.md#version)

### Methods

- [addDays](ChangeToken.md#adddays)
- [addMinutes](ChangeToken.md#addminutes)
- [addSeconds](ChangeToken.md#addseconds)
- [getDate](ChangeToken.md#getdate)
- [toJSON](ChangeToken.md#tojson)
- [toSendable](ChangeToken.md#tosendable)
- [toString](ChangeToken.md#tostring)
- [withDate](ChangeToken.md#withdate)
- [CreateContentDBChangeToken](ChangeToken.md#createcontentdbchangetoken)
- [CreateListChangeToken](ChangeToken.md#createlistchangetoken)
- [CreateScopeChangeToken](ChangeToken.md#createscopechangetoken)
- [CreateSiteChangeToken](ChangeToken.md#createsitechangetoken)
- [CreateWebChangeToken](ChangeToken.md#createwebchangetoken)
- [DateToTicks](ChangeToken.md#datetoticks)
- [FromResponse](ChangeToken.md#fromresponse)
- [FromString](ChangeToken.md#fromstring)
- [TicksToDate](ChangeToken.md#tickstodate)

## Constructors

### constructor

• **new ChangeToken**(`version`, `scopeKind`, `scopeGUID`, `changeTimeTicks`, `changeNumber`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |
| `scopeKind` | `ScopeKind` |
| `scopeGUID` | `string` |
| `changeTimeTicks` | `number` |
| `changeNumber` | `number` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:33

## Properties

### \_changeNumber

• `Private` `Readonly` **\_changeNumber**: `number`

#### Defined in

src/change/ChangeToken.ts:31

___

### \_changeTimeTicks

• `Private` `Readonly` **\_changeTimeTicks**: `number`

#### Defined in

src/change/ChangeToken.ts:30

___

### \_scopeGUID

• `Private` `Readonly` **\_scopeGUID**: `string`

#### Defined in

src/change/ChangeToken.ts:29

___

### \_scopeKind

• `Private` `Readonly` **\_scopeKind**: `ScopeKind`

#### Defined in

src/change/ChangeToken.ts:28

___

### \_version

• `Private` `Readonly` **\_version**: `number`

#### Defined in

src/change/ChangeToken.ts:27

## Accessors

### changeNumber

• `get` **changeNumber**(): `number`

#### Returns

`number`

#### Defined in

src/change/ChangeToken.ts:60

___

### changeTimeTicks

• `get` **changeTimeTicks**(): `number`

#### Returns

`number`

#### Defined in

src/change/ChangeToken.ts:56

___

### scopeGUID

• `get` **scopeGUID**(): `string`

For a list-scoped change this will be the GUID of the list

#### Returns

`string`

#### Defined in

src/change/ChangeToken.ts:52

___

### scopeKind

• `get` **scopeKind**(): `ScopeKind`

#### Returns

`ScopeKind`

#### Defined in

src/change/ChangeToken.ts:45

___

### version

• `get` **version**(): `number`

#### Returns

`number`

#### Defined in

src/change/ChangeToken.ts:41

## Methods

### addDays

▸ **addDays**(`days`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | `number` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:83

___

### addMinutes

▸ **addMinutes**(`minutes`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minutes` | `number` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:78

___

### addSeconds

▸ **addSeconds**(`seconds`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `number` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:73

___

### getDate

▸ **getDate**(): `Date`

#### Returns

`Date`

#### Defined in

src/change/ChangeToken.ts:64

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changeNumber` | `number` |
| `changeTimeTicks` | `number` |
| `date` | `Date` |
| `scopeGUID` | `string` |
| `scopeKind` | `string` |
| `version` | `number` |

#### Defined in

src/change/ChangeToken.ts:132

___

### toSendable

▸ **toSendable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `StringValue` | `string` |

#### Defined in

src/change/ChangeToken.ts:143

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/change/ChangeToken.ts:88

___

### withDate

▸ **withDate**(`date`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:68

___

### CreateContentDBChangeToken

▸ **CreateContentDBChangeToken**(`contentDbId`, `changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentDbId` | `string` |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:113

___

### CreateListChangeToken

▸ **CreateListChangeToken**(`listId`, `changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:117

___

### CreateScopeChangeToken

▸ **CreateScopeChangeToken**(`scopeKind`, `scopeGUID`, `changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeKind` | `ScopeKind` |
| `scopeGUID` | `string` |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:101

___

### CreateSiteChangeToken

▸ **CreateSiteChangeToken**(`siteId`, `changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `siteId` | `string` |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:105

___

### CreateWebChangeToken

▸ **CreateWebChangeToken**(`webId`, `changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webId` | `string` |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:109

___

### DateToTicks

▸ **DateToTicks**(`date`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

#### Defined in

src/change/ChangeToken.ts:127

___

### FromResponse

▸ **FromResponse**(`changeTokenResponse`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeTokenResponse` | [`ChangeTokenResponse`](../interfaces/ChangeTokenResponse.md) |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:92

___

### FromString

▸ **FromString**(`changeTokenValue`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeTokenValue` | `string` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeToken.ts:96

___

### TicksToDate

▸ **TicksToDate**(`ticks`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticks` | `number` |

#### Returns

`Date`

#### Defined in

src/change/ChangeToken.ts:121
