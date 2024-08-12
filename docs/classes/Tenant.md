[sharepoint](../README.md) / [Exports](../modules.md) / Tenant

# Class: Tenant

## Hierarchy

- [`RequestSender`](RequestSender.md)

  ↳ **`Tenant`**

## Table of contents

### Constructors

- [constructor](Tenant.md#constructor)

### Properties

- [\_authenticator](Tenant.md#_authenticator)
- [\_name](Tenant.md#_name)

### Accessors

- [baseUrl](Tenant.md#baseurl)
- [name](Tenant.md#name)

### Methods

- [deleteRequest](Tenant.md#deleterequest)
- [dontThrowFor](Tenant.md#dontthrowfor)
- [getAuth](Tenant.md#getauth)
- [getName](Tenant.md#getname)
- [getRequest](Tenant.md#getrequest)
- [getSite](Tenant.md#getsite)
- [listSites](Tenant.md#listsites)
- [patchRequest](Tenant.md#patchrequest)
- [postRequest](Tenant.md#postrequest)
- [putRequest](Tenant.md#putrequest)
- [toString](Tenant.md#tostring)

## Constructors

### constructor

• **new Tenant**(`name`, `auth`): [`Tenant`](Tenant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `auth` | [`Authenticator`](../interfaces/Authenticator.md) |

#### Returns

[`Tenant`](Tenant.md)

#### Overrides

[RequestSender](RequestSender.md).[constructor](RequestSender.md#constructor)

#### Defined in

src/Tenant.ts:16

## Properties

### \_authenticator

• `Private` `Readonly` **\_authenticator**: [`Authenticator`](../interfaces/Authenticator.md)

#### Defined in

src/Tenant.ts:14

___

### \_name

• `Private` `Readonly` **\_name**: `string`

#### Defined in

src/Tenant.ts:13

## Accessors

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

RequestSender.baseUrl

#### Defined in

src/Tenant.ts:30

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/Tenant.ts:34

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

[RequestSender](RequestSender.md).[deleteRequest](RequestSender.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Overrides

[RequestSender](RequestSender.md).[dontThrowFor](RequestSender.md#dontthrowfor)

#### Defined in

src/Tenant.ts:22

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[RequestSender](RequestSender.md).[getAuth](RequestSender.md#getauth)

#### Defined in

src/Tenant.ts:26

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

src/Tenant.ts:111

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

[RequestSender](RequestSender.md).[getRequest](RequestSender.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getSite

▸ **getSite**(`siteName`): [`Site`](Site.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `siteName` | `string` |

#### Returns

[`Site`](Site.md)

#### Defined in

src/Tenant.ts:115

___

### listSites

▸ **listSites**(): `Promise`\<`SiteInfo`[]\>

#### Returns

`Promise`\<`SiteInfo`[]\>

**`Deprecated`**

Not recommended for use

#### Defined in

src/Tenant.ts:41

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

[RequestSender](RequestSender.md).[patchRequest](RequestSender.md#patchrequest)

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

[RequestSender](RequestSender.md).[postRequest](RequestSender.md#postrequest)

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

[RequestSender](RequestSender.md).[putRequest](RequestSender.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/Tenant.ts:107
