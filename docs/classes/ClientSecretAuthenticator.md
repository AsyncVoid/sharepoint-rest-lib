[sharepoint](../README.md) / [Exports](../modules.md) / ClientSecretAuthenticator

# Class: ClientSecretAuthenticator

## Implements

- [`Authenticator`](../interfaces/Authenticator.md)

## Table of contents

### Constructors

- [constructor](ClientSecretAuthenticator.md#constructor)

### Properties

- [\_clientId](ClientSecretAuthenticator.md#_clientid)
- [\_clientSecret](ClientSecretAuthenticator.md#_clientsecret)
- [\_scope](ClientSecretAuthenticator.md#_scope)
- [\_tenant](ClientSecretAuthenticator.md#_tenant)
- [\_token](ClientSecretAuthenticator.md#_token)
- [\_tokenRenewal](ClientSecretAuthenticator.md#_tokenrenewal)

### Methods

- [getAccessToken](ClientSecretAuthenticator.md#getaccesstoken)
- [needsTokenRefresh](ClientSecretAuthenticator.md#needstokenrefresh)
- [create](ClientSecretAuthenticator.md#create)
- [createExplicit](ClientSecretAuthenticator.md#createexplicit)

## Constructors

### constructor

• **new ClientSecretAuthenticator**(`tenant`, `scope`, `clientId`, `clientSecret`): [`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenant` | `string` |
| `scope` | `string` |
| `clientId` | `string` |
| `clientSecret` | `string` |

#### Returns

[`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

#### Defined in

src/auth/ClientSecretAuthenticator.ts:13

## Properties

### \_clientId

• `Private` `Readonly` **\_clientId**: `string`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:8

___

### \_clientSecret

• `Private` `Readonly` **\_clientSecret**: `string`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:9

___

### \_scope

• `Private` `Readonly` **\_scope**: `string`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:7

___

### \_tenant

• `Private` `Readonly` **\_tenant**: `string`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:6

___

### \_token

• `Private` **\_token**: `string` = `null`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:10

___

### \_tokenRenewal

• `Private` **\_tokenRenewal**: `number` = `null`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:11

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

src/auth/ClientSecretAuthenticator.ts:27

___

### needsTokenRefresh

▸ **needsTokenRefresh**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/auth/ClientSecretAuthenticator.ts:20

___

### create

▸ **create**(`tenantName`, `clientId`, `clientSecret`): [`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

Creates a new ClientSecretAuthenticator for the given tenant name, clientId and clientSecret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantName` | `string` | The name of the tenant, e.g. "mytenant" where the tenant is mytenant.onmicrosoft.com |
| `clientId` | `string` | The client ID of the app registration |
| `clientSecret` | `string` | The client secret of the app registration |

#### Returns

[`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

A new ClientSecretAuthenticator

#### Defined in

src/auth/ClientSecretAuthenticator.ts:50

___

### createExplicit

▸ **createExplicit**(`tenant`, `scope`, `clientId`, `clientSecret`): [`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

Creates a new ClientSecretAuthenticator for the given tenant, scope, clientId and clientSecret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenant` | `string` | The tenant name, e.g. "mytenant.onmicrosoft.com" |
| `scope` | `string` | The scope of the token, e.g. "https://mytenant.sharepoint.com/.default" |
| `clientId` | `string` | The client ID of the app registration |
| `clientSecret` | `string` | The client secret of the app registration |

#### Returns

[`ClientSecretAuthenticator`](ClientSecretAuthenticator.md)

A new ClientSecretAuthenticator

**`Deprecated`**

Use [create](ClientSecretAuthenticator.md#create) instead

#### Defined in

src/auth/ClientSecretAuthenticator.ts:63
