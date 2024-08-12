[sharepoint](../README.md) / [Exports](../modules.md) / Authenticator

# Interface: Authenticator

## Implemented by

- [`CertificateAuthenticator`](../classes/CertificateAuthenticator.md)
- [`ClientSecretAuthenticator`](../classes/ClientSecretAuthenticator.md)

## Table of contents

### Methods

- [getAccessToken](Authenticator.md#getaccesstoken)

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

#### Defined in

src/auth/Authenticator.ts:9
