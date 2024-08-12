[sharepoint](../README.md) / [Exports](../modules.md) / SPError

# Class: SPError

## Hierarchy

- `Error`

  ↳ **`SPError`**

## Implements

- [`SPErrorInfo`](../interfaces/SPErrorInfo.md)

## Table of contents

### Constructors

- [constructor](SPError.md#constructor)

### Properties

- [code](SPError.md#code)
- [from](SPError.md#from)
- [getting](SPError.md#getting)
- [kind](SPError.md#kind)
- [message](SPError.md#message)
- [name](SPError.md#name)
- [stack](SPError.md#stack)
- [prepareStackTrace](SPError.md#preparestacktrace)
- [stackTraceLimit](SPError.md#stacktracelimit)

### Methods

- [ConvertError](SPError.md#converterror)
- [FromResponse](SPError.md#fromresponse)
- [HandleError](SPError.md#handleerror)
- [captureStackTrace](SPError.md#capturestacktrace)

## Constructors

### constructor

• **new SPError**(`code`, `message`, `spErrorInfo`): [`SPError`](SPError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |
| `spErrorInfo` | [`SPErrorInfo`](../interfaces/SPErrorInfo.md) |

#### Returns

[`SPError`](SPError.md)

#### Overrides

Error.constructor

#### Defined in

src/SPError.ts:46

## Properties

### code

• `Readonly` **code**: `string`

#### Defined in

src/SPError.ts:41

___

### from

• `Readonly` **from**: `string`

#### Implementation of

[SPErrorInfo](../interfaces/SPErrorInfo.md).[from](../interfaces/SPErrorInfo.md#from)

#### Defined in

src/SPError.ts:43

___

### getting

• `Readonly` **getting**: `string`

#### Implementation of

[SPErrorInfo](../interfaces/SPErrorInfo.md).[getting](../interfaces/SPErrorInfo.md#getting)

#### Defined in

src/SPError.ts:42

___

### kind

• `Readonly` **kind**: [`ErrorKind`](../enums/ErrorKind.md)

#### Defined in

src/SPError.ts:44

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### ConvertError

▸ **ConvertError**\<`T`\>(`error`, `info`, `ignoreKinds?`): `void` \| [`SPError`](SPError.md) \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `error` | `T` | `undefined` |
| `info` | [`SPErrorInfo`](../interfaces/SPErrorInfo.md) | `undefined` |
| `ignoreKinds` | [`ErrorKind`](../enums/ErrorKind.md)[] | `[]` |

#### Returns

`void` \| [`SPError`](SPError.md) \| `T`

#### Defined in

src/SPError.ts:76

___

### FromResponse

▸ **FromResponse**(`response`, `info`): [`SPError`](SPError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `SPErrorResponse` |
| `info` | [`SPErrorInfo`](../interfaces/SPErrorInfo.md) |

#### Returns

[`SPError`](SPError.md)

#### Defined in

src/SPError.ts:55

___

### HandleError

▸ **HandleError**\<`T`\>(`error`, `info`, `nullableKinds?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `error` | `T` | `undefined` |
| `info` | [`SPErrorInfo`](../interfaces/SPErrorInfo.md) | `undefined` |
| `nullableKinds` | [`ErrorKind`](../enums/ErrorKind.md)[] | `[]` |

#### Returns

`void`

#### Defined in

src/SPError.ts:59

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
