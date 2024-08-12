[sharepoint](../README.md) / [Exports](../modules.md) / ClaimBasedIdentity

# Class: ClaimBasedIdentity

## Table of contents

### Constructors

- [constructor](ClaimBasedIdentity.md#constructor)

### Properties

- [\_claimType](ClaimBasedIdentity.md#_claimtype)
- [\_claimValue](ClaimBasedIdentity.md#_claimvalue)
- [\_claimValueType](ClaimBasedIdentity.md#_claimvaluetype)
- [\_originalIssuerEncoded](ClaimBasedIdentity.md#_originalissuerencoded)
- [\_originalIssuerType](ClaimBasedIdentity.md#_originalissuertype)
- [\_providerType](ClaimBasedIdentity.md#_providertype)

### Accessors

- [claimType](ClaimBasedIdentity.md#claimtype)
- [claimValue](ClaimBasedIdentity.md#claimvalue)
- [claimValueEncoded](ClaimBasedIdentity.md#claimvalueencoded)
- [claimValueType](ClaimBasedIdentity.md#claimvaluetype)
- [isSharePointApp](ClaimBasedIdentity.md#issharepointapp)
- [originalIssuerEncoded](ClaimBasedIdentity.md#originalissuerencoded)
- [originalIssuerType](ClaimBasedIdentity.md#originalissuertype)
- [providerType](ClaimBasedIdentity.md#providertype)
- [stringValue](ClaimBasedIdentity.md#stringvalue)

### Methods

- [toJSON](ClaimBasedIdentity.md#tojson)
- [toString](ClaimBasedIdentity.md#tostring)
- [DecodeClaimValue](ClaimBasedIdentity.md#decodeclaimvalue)
- [EncodeClaimValue](ClaimBasedIdentity.md#encodeclaimvalue)
- [FromString](ClaimBasedIdentity.md#fromstring)

## Constructors

### constructor

• **new ClaimBasedIdentity**(`providerType`, `claimType`, `claimValueType`, `originalIssuerType`, `originalIssuerEncoded`, `claimValue`): [`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerType` | `ProviderType` |
| `claimType` | [`ClaimType`](../enums/ClaimType.md) |
| `claimValueType` | [`ClaimValueType`](../enums/ClaimValueType.md) |
| `originalIssuerType` | `OriginalIssuerType` |
| `originalIssuerEncoded` | `string` |
| `claimValue` | `string` |

#### Returns

[`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:18

## Properties

### \_claimType

• `Private` `Readonly` **\_claimType**: [`ClaimType`](../enums/ClaimType.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:12

___

### \_claimValue

• `Private` `Readonly` **\_claimValue**: `string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:16

___

### \_claimValueType

• `Private` `Readonly` **\_claimValueType**: [`ClaimValueType`](../enums/ClaimValueType.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:13

___

### \_originalIssuerEncoded

• `Private` `Optional` `Readonly` **\_originalIssuerEncoded**: `string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:15

___

### \_originalIssuerType

• `Private` `Readonly` **\_originalIssuerType**: `OriginalIssuerType`

#### Defined in

src/claim/ClaimBasedIdentity.ts:14

___

### \_providerType

• `Private` `Readonly` **\_providerType**: `ProviderType`

#### Defined in

src/claim/ClaimBasedIdentity.ts:11

## Accessors

### claimType

• `get` **claimType**(): [`ClaimType`](../enums/ClaimType.md)

#### Returns

[`ClaimType`](../enums/ClaimType.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:65

___

### claimValue

• `get` **claimValue**(): `string`

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:81

___

### claimValueEncoded

• `get` **claimValueEncoded**(): `string`

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:85

___

### claimValueType

• `get` **claimValueType**(): [`ClaimValueType`](../enums/ClaimValueType.md)

#### Returns

[`ClaimValueType`](../enums/ClaimValueType.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:69

___

### isSharePointApp

• `get` **isSharePointApp**(): `boolean`

Returns true if this is an Office 365 SharePoint Online - Sharepoint App claim.
I.e. it is the Sharepoint App itself

#### Returns

`boolean`

#### Defined in

src/claim/ClaimBasedIdentity.ts:94

___

### originalIssuerEncoded

• `get` **originalIssuerEncoded**(): `string`

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:77

___

### originalIssuerType

• `get` **originalIssuerType**(): `OriginalIssuerType`

#### Returns

`OriginalIssuerType`

#### Defined in

src/claim/ClaimBasedIdentity.ts:73

___

### providerType

• `get` **providerType**(): `ProviderType`

#### Returns

`ProviderType`

#### Defined in

src/claim/ClaimBasedIdentity.ts:61

___

### stringValue

• `get` **stringValue**(): `string`

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:108

## Methods

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/claim/ClaimBasedIdentity.ts:152

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:115

___

### DecodeClaimValue

▸ **DecodeClaimValue**(`claimValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `claimValue` | `string` |

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:27

___

### EncodeClaimValue

▸ **EncodeClaimValue**(`claimValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `claimValue` | `string` |

#### Returns

`string`

#### Defined in

src/claim/ClaimBasedIdentity.ts:38

___

### FromString

▸ **FromString**(`claimBasedIdentity`): [`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `claimBasedIdentity` | `string` |

#### Returns

[`ClaimBasedIdentity`](ClaimBasedIdentity.md)

#### Defined in

src/claim/ClaimBasedIdentity.ts:45
