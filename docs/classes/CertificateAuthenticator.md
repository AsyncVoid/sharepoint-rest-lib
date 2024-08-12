[sharepoint](../README.md) / [Exports](../modules.md) / CertificateAuthenticator

# Class: CertificateAuthenticator

## Implements

- [`Authenticator`](../interfaces/Authenticator.md)

## Table of contents

### Constructors

- [constructor](CertificateAuthenticator.md#constructor)

### Properties

- [\_clientId](CertificateAuthenticator.md#_clientid)
- [\_privateKey](CertificateAuthenticator.md#_privatekey)
- [\_publicKeyHash](CertificateAuthenticator.md#_publickeyhash)
- [\_scope](CertificateAuthenticator.md#_scope)
- [\_tenant](CertificateAuthenticator.md#_tenant)
- [\_token](CertificateAuthenticator.md#_token)
- [\_tokenRenewal](CertificateAuthenticator.md#_tokenrenewal)

### Methods

- [getAccessToken](CertificateAuthenticator.md#getaccesstoken)
- [needsTokenRefresh](CertificateAuthenticator.md#needstokenrefresh)
- [create](CertificateAuthenticator.md#create)
- [createExplicit](CertificateAuthenticator.md#createexplicit)
- [createJWT](CertificateAuthenticator.md#createjwt)

## Constructors

### constructor

• **new CertificateAuthenticator**(`tenant`, `scope`, `clientId`, `privateKey`, `publicKeyHash`): [`CertificateAuthenticator`](CertificateAuthenticator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenant` | `string` |
| `scope` | `string` |
| `clientId` | `string` |
| `privateKey` | `string` |
| `publicKeyHash` | `string` |

#### Returns

[`CertificateAuthenticator`](CertificateAuthenticator.md)

#### Defined in

src/auth/CertificateAuthenticator.ts:18

## Properties

### \_clientId

• `Private` `Readonly` **\_clientId**: `string`

#### Defined in

src/auth/CertificateAuthenticator.ts:12

___

### \_privateKey

• `Private` `Readonly` **\_privateKey**: `string`

#### Defined in

src/auth/CertificateAuthenticator.ts:13

___

### \_publicKeyHash

• `Private` `Readonly` **\_publicKeyHash**: `string`

#### Defined in

src/auth/CertificateAuthenticator.ts:14

___

### \_scope

• `Private` `Readonly` **\_scope**: `string`

#### Defined in

src/auth/CertificateAuthenticator.ts:11

___

### \_tenant

• `Private` `Readonly` **\_tenant**: `string`

#### Defined in

src/auth/CertificateAuthenticator.ts:10

___

### \_token

• `Private` **\_token**: `string` = `null`

#### Defined in

src/auth/CertificateAuthenticator.ts:15

___

### \_tokenRenewal

• `Private` **\_tokenRenewal**: `number` = `null`

#### Defined in

src/auth/CertificateAuthenticator.ts:16

## Methods

### getAccessToken

▸ **getAccessToken**(): `Promise`\<`string`\>

This is a function that will return a Bearer token.
This function is evaluated and sent with every request to the SharePoint API.
You can use this to provide a token that is valid for a certain time period.
And check if the token is still valid before returning it.

#### Returns

`Promise`\<`string`\>

The Bearer token

#### Implementation of

[Authenticator](../interfaces/Authenticator.md).[getAccessToken](../interfaces/Authenticator.md#getaccesstoken)

#### Defined in

src/auth/CertificateAuthenticator.ts:52

___

### needsTokenRefresh

▸ **needsTokenRefresh**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/auth/CertificateAuthenticator.ts:26

___

### create

▸ **create**(`tenantName`, `clientId`, `privateKey`, `publicKeyHash`): [`CertificateAuthenticator`](CertificateAuthenticator.md)

Creates a new CertificateAuthenticator for the given tenant name, clientId and clientSecret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantName` | `string` | The name of the tenant, e.g. "mytenant" where the tenant is mytenant.onmicrosoft.com |
| `clientId` | `string` | The client ID of the app registration |
| `privateKey` | `string` | The private key of the app registration e.g. "-----BEGIN PRIVATE KEY-----\nMIIEv..." |
| `publicKeyHash` | `string` | The hash of the public key of the app registration |

#### Returns

[`CertificateAuthenticator`](CertificateAuthenticator.md)

A new CertificateAuthenticator

#### Defined in

src/auth/CertificateAuthenticator.ts:100

___

### createExplicit

▸ **createExplicit**(`tenant`, `scope`, `clientId`, `privateKey`, `publicKeyHash`): [`CertificateAuthenticator`](CertificateAuthenticator.md)

Creates a new CertificateAuthenticator for the given tenant, scope, clientId and clientSecret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenant` | `string` | The tenant name, e.g. "mytenant.onmicrosoft.com" |
| `scope` | `string` | The scope of the token, e.g. "https://mytenant.sharepoint.com/.default" |
| `clientId` | `string` | The client ID of the app registration |
| `privateKey` | `string` | The private key of the app registration e.g. "-----BEGIN PRIVATE KEY-----\nMIIEv..." |
| `publicKeyHash` | `string` | The hash of the public key of the app registration |

#### Returns

[`CertificateAuthenticator`](CertificateAuthenticator.md)

A new CertificateAuthenticator

**`Deprecated`**

Use [create](CertificateAuthenticator.md#create) instead

#### Defined in

src/auth/CertificateAuthenticator.ts:114

___

### createJWT

▸ **createJWT**(`header`, `payload`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `JWTHeader` |
| `payload` | `JWTPayload` |
| `privateKey` | `string` |

#### Returns

`string`

#### Defined in

src/auth/CertificateAuthenticator.ts:33
