[sharepoint](../README.md) / [Exports](../modules.md) / SPFileSystemEntry

# Class: SPFileSystemEntry

## Table of contents

### Constructors

- [constructor](SPFileSystemEntry.md#constructor)

### Properties

- [\_exists](SPFileSystemEntry.md#_exists)
- [\_existsAllowThrowForPolicyFailures](SPFileSystemEntry.md#_existsallowthrowforpolicyfailures)
- [\_name](SPFileSystemEntry.md#_name)
- [\_serverRelativeUrl](SPFileSystemEntry.md#_serverrelativeurl)
- [\_site](SPFileSystemEntry.md#_site)
- [\_timeCreated](SPFileSystemEntry.md#_timecreated)
- [\_timeLastModified](SPFileSystemEntry.md#_timelastmodified)
- [\_uniqueId](SPFileSystemEntry.md#_uniqueid)

### Accessors

- [exists](SPFileSystemEntry.md#exists)
- [existsAllowThrowForPolicyFailures](SPFileSystemEntry.md#existsallowthrowforpolicyfailures)
- [name](SPFileSystemEntry.md#name)
- [serverRelativeUrl](SPFileSystemEntry.md#serverrelativeurl)
- [site](SPFileSystemEntry.md#site)
- [timeCreated](SPFileSystemEntry.md#timecreated)
- [timeLastModified](SPFileSystemEntry.md#timelastmodified)
- [uniqueId](SPFileSystemEntry.md#uniqueid)

### Methods

- [getPath](SPFileSystemEntry.md#getpath)
- [toJSON](SPFileSystemEntry.md#tojson)
- [toString](SPFileSystemEntry.md#tostring)

## Constructors

### constructor

• **new SPFileSystemEntry**(`site`, `exists`, `existsAllowThrowForPolicyFailures`, `name`, `serverRelativeUri`, `timeCreated`, `timeLastModified`, `uniqueId`): [`SPFileSystemEntry`](SPFileSystemEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `exists` | `boolean` |
| `existsAllowThrowForPolicyFailures` | `boolean` |
| `name` | `string` |
| `serverRelativeUri` | `string` |
| `timeCreated` | `Date` |
| `timeLastModified` | `Date` |
| `uniqueId` | `string` |

#### Returns

[`SPFileSystemEntry`](SPFileSystemEntry.md)

#### Defined in

src/filesystem/SPFileSystemEntry.ts:13

## Properties

### \_exists

• `Protected` `Readonly` **\_exists**: `boolean`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:5

___

### \_existsAllowThrowForPolicyFailures

• `Protected` `Readonly` **\_existsAllowThrowForPolicyFailures**: `boolean`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:6

___

### \_name

• `Protected` `Readonly` **\_name**: `string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:7

___

### \_serverRelativeUrl

• `Protected` `Readonly` **\_serverRelativeUrl**: `string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:8

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Defined in

src/filesystem/SPFileSystemEntry.ts:4

___

### \_timeCreated

• `Protected` `Readonly` **\_timeCreated**: `Date`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:9

___

### \_timeLastModified

• `Protected` `Readonly` **\_timeLastModified**: `Date`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:10

___

### \_uniqueId

• `Protected` `Readonly` **\_uniqueId**: `string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:11

## Accessors

### exists

• `get` **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:28

___

### existsAllowThrowForPolicyFailures

• `get` **existsAllowThrowForPolicyFailures**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:32

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:36

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:40

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Defined in

src/filesystem/SPFileSystemEntry.ts:24

___

### timeCreated

• `get` **timeCreated**(): `Date`

#### Returns

`Date`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:44

___

### timeLastModified

• `get` **timeLastModified**(): `Date`

#### Returns

`Date`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:48

___

### uniqueId

• `get` **uniqueId**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:52

## Methods

### getPath

▸ **getPath**(): [`SPPath`](SPPath.md)

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPFileSystemEntry.ts:60

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exists` | `boolean` |
| `existsAllowThrowForPolicyFailures` | `boolean` |
| `name` | `string` |
| `serverRelativeUrl` | `string` |
| `timeCreated` | `Date` |
| `timeLastModified` | `Date` |
| `uniqueId` | `string` |

#### Defined in

src/filesystem/SPFileSystemEntry.ts:64

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPFileSystemEntry.ts:56
