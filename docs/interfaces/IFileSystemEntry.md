[sharepoint](../README.md) / [Exports](../modules.md) / IFileSystemEntry

# Interface: IFileSystemEntry

## Hierarchy

- [`HasServerRelativeUrl`](HasServerRelativeUrl.md)

  ↳ **`IFileSystemEntry`**

## Implemented by

- [`SPFile`](../classes/SPFile.md)
- [`SPFolder`](../classes/SPFolder.md)

## Table of contents

### Accessors

- [exists](IFileSystemEntry.md#exists)
- [existsAllowThrowForPolicyFailures](IFileSystemEntry.md#existsallowthrowforpolicyfailures)
- [name](IFileSystemEntry.md#name)
- [serverRelativeUrl](IFileSystemEntry.md#serverrelativeurl)
- [timeCreated](IFileSystemEntry.md#timecreated)
- [timeLastModified](IFileSystemEntry.md#timelastmodified)
- [uniqueId](IFileSystemEntry.md#uniqueid)

### Methods

- [getPath](IFileSystemEntry.md#getpath)
- [toString](IFileSystemEntry.md#tostring)

## Accessors

### exists

• `get` **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/filesystem/IFileSystemEntry.ts:5

___

### existsAllowThrowForPolicyFailures

• `get` **existsAllowThrowForPolicyFailures**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/filesystem/IFileSystemEntry.ts:7

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/IFileSystemEntry.ts:9

___

### serverRelativeUrl

• `get` **serverRelativeUrl**(): `string`

#### Returns

`string`

#### Overrides

HasServerRelativeUrl.serverRelativeUrl

#### Defined in

src/filesystem/IFileSystemEntry.ts:11

___

### timeCreated

• `get` **timeCreated**(): `Date`

#### Returns

`Date`

#### Defined in

src/filesystem/IFileSystemEntry.ts:13

___

### timeLastModified

• `get` **timeLastModified**(): `Date`

#### Returns

`Date`

#### Defined in

src/filesystem/IFileSystemEntry.ts:15

___

### uniqueId

• `get` **uniqueId**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/IFileSystemEntry.ts:17

## Methods

### getPath

▸ **getPath**(): [`SPPath`](../classes/SPPath.md)

#### Returns

[`SPPath`](../classes/SPPath.md)

#### Defined in

src/filesystem/IFileSystemEntry.ts:21

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/IFileSystemEntry.ts:19
