[sharepoint](../README.md) / [Exports](../modules.md) / SPPath

# Class: SPPath

## Table of contents

### Constructors

- [constructor](SPPath.md#constructor)

### Properties

- [\_value](SPPath.md#_value)

### Accessors

- [value](SPPath.md#value)

### Methods

- [asEncoded](SPPath.md#asencoded)
- [child](SPPath.md#child)
- [getPathChain](SPPath.md#getpathchain)
- [getPathTree](SPPath.md#getpathtree)
- [isAllowed](SPPath.md#isallowed)
- [isDisallowed](SPPath.md#isdisallowed)
- [parent](SPPath.md#parent)
- [parentAndChildName](SPPath.md#parentandchildname)
- [parentAndChildWithName](SPPath.md#parentandchildwithname)
- [toJSON](SPPath.md#tojson)
- [toString](SPPath.md#tostring)
- [withRoot](SPPath.md#withroot)
- [FromEncoded](SPPath.md#fromencoded)
- [FromFile](SPPath.md#fromfile)
- [FromFileOrFolder](SPPath.md#fromfileorfolder)
- [FromFileSystemEntry](SPPath.md#fromfilesystementry)
- [FromFileSystemObject](SPPath.md#fromfilesystemobject)
- [FromFolder](SPPath.md#fromfolder)
- [FromHasServerRelativeUrl](SPPath.md#fromhasserverrelativeurl)
- [FromPathLike](SPPath.md#frompathlike)
- [FromResponse](SPPath.md#fromresponse)

## Constructors

### constructor

• **new SPPath**(`value`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:26

## Properties

### \_value

• `Private` `Readonly` **\_value**: `string`

#### Defined in

src/filesystem/SPPath.ts:24

## Accessors

### value

• `get` **value**(): `string`

Get the path value

#### Returns

`string`

the path value

**`Description`**

This is the same as calling toString()

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const value = path.value; // "/sites/MySite/Shared Documents"
```

#### Defined in

src/filesystem/SPPath.ts:106

## Methods

### asEncoded

▸ **asEncoded**(): `string`

Get the path value as an encoded string

#### Returns

`string`

the path value as an encoded string

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const encoded = path.asEncoded(); // "%2Fsites%2FMySite%2FShared%20Documents"
```

#### Defined in

src/filesystem/SPPath.ts:117

___

### child

▸ **child**(`path`): [`SPPath`](SPPath.md)

Get the child path from this path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the child path |

#### Returns

[`SPPath`](SPPath.md)

the child path

**`Description`**

Adds the given path to the end of this path.
Will trim off any leading or trailing slashes.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite");
const child = path.child("Shared Documents"); // /sites/MySite/Shared Documents
```

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite");
const child = path.child("/Shared Documents"); // /sites/MySite/Shared Documents
```

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite");
const child = path.child("Shared Documents/"); // /sites/MySite/Shared Documents
```

#### Defined in

src/filesystem/SPPath.ts:212

___

### getPathChain

▸ **getPathChain**(): `string`[]

Get the path hierarchy as an array of strings

#### Returns

`string`[]

the path hierarchy

**`Description`**

The first element is the root folder, the last element is the current folder.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const hierarchy = path.getPathChain(); // ["sites", "MySite", "Shared Documents"]
```

#### Defined in

src/filesystem/SPPath.ts:191

___

### getPathTree

▸ **getPathTree**(): [`SPPath`](SPPath.md)[]

Get all the folders in the path as an array

#### Returns

[`SPPath`](SPPath.md)[]

the path tree

**`Description`**

The first element is the root folder, the last element is the current folder.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const tree = path.getPathTree(); // ["/", "/sites", "/sites/MySite", "/sites/MySite/Shared Documents"]
```

#### Defined in

src/filesystem/SPPath.ts:130

___

### isAllowed

▸ **isAllowed**(): `boolean`

Check if the path is allowed

#### Returns

`boolean`

true if the path is allowed

**`Description`**

Opposite of [SPPath.isDisallowed](SPPath.md#isdisallowed)

#### Defined in

src/filesystem/SPPath.ts:171

___

### isDisallowed

▸ **isDisallowed**(): `boolean`

Check if the path is disallowed

#### Returns

`boolean`

true if the path is disallowed

**`Description`**

Checks if the path contains any disallowed characters or file/folder names.<br>
Disallowed characters: <b>< > : " / \ | ? *</b><br>
Disallowed names: <b>.lock, CON, PRN, AUX, NUL, COM0-9, LPT0-9, _vti_, desktop.ini</b><br>
Or any file/folder name that starts with <b>~$</b>

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const isDisallowed = path.isDisallowed(); // false
```

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents/.lock");
const isDisallowed = path.isDisallowed(); // true
```

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents/~$MyFile.docx");
const isDisallowed = path.isDisallowed(); // true
```

#### Defined in

src/filesystem/SPPath.ts:160

___

### parent

▸ **parent**(): [`SPPath`](SPPath.md)

Get the parent folder from this path

#### Returns

[`SPPath`](SPPath.md)

the parent folder

**`Description`**

If the path is a root folder, it will return the same instance.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
let parent = path.parent(); // /sites/MySite
parent = path.parent(); // /sites
parent = path.parent(); // /
parent = path.parent(); // /
parent == parent.parent(); // true
```

#### Defined in

src/filesystem/SPPath.ts:230

___

### parentAndChildName

▸ **parentAndChildName**(): `Object`

Get the parent folder and child name from this path

#### Returns

`Object`

the parent folder and child name

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `parent` | [`SPPath`](SPPath.md) |

**`Description`**

If the path is a root folder, it will return the same instance.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
let parent = path.parentAndChildName(); // {parent: /sites/MySite, name: "Shared Documents"}
```

#### Defined in

src/filesystem/SPPath.ts:243

___

### parentAndChildWithName

▸ **parentAndChildWithName**(`name?`): `Object`

Get the parent folder and child name from this path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | the child name |

#### Returns

`Object`

the parent folder and child name

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `parent` | [`SPPath`](SPPath.md) |

**`Description`**

If the name is null or undefined, the child name will be the last folder in this path, and this will be the parent folder.
If the path is a root folder, it will return the same instance.

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const {parent, name} = path.parentAndChildName(); // {parent: /sites/MySite, name: "Shared Documents"}
const parentAndName = parent.parentAndChildName(); // {parent: /sites, name: "MySite"}
```

**`Example`**

```ts
const path = Path.FromPathLike("/sites/MySite/Shared Documents");
const {parent, name} = path.parentAndChildName("MyFile.txt"); // {parent: /sites/MySite/Shared Documents, name: "MyFile.txt"}
```

#### Defined in

src/filesystem/SPPath.ts:267

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPPath.ts:283

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/filesystem/SPPath.ts:279

___

### withRoot

▸ **withRoot**(`root`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `string` |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:175

___

### FromEncoded

▸ **FromEncoded**(`encoded`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:34

___

### FromFile

▸ **FromFile**(`file`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`SPFile`](SPFile.md) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:73

___

### FromFileOrFolder

▸ **FromFileOrFolder**(`fileOrFolder`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileOrFolder` | [`SPFile`](SPFile.md) \| [`SPFolder`](SPFolder.md) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:81

___

### FromFileSystemEntry

▸ **FromFileSystemEntry**(`fileSystemEntry`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileSystemEntry` | [`SPFileSystemEntry`](SPFileSystemEntry.md) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:85

___

### FromFileSystemObject

▸ **FromFileSystemObject**\<`T`\>(`fileSystemEntry`): [`SPPath`](SPPath.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileSystemEntry` | `T` |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:89

___

### FromFolder

▸ **FromFolder**(`folder`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | [`SPFolder`](SPFolder.md) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:77

___

### FromHasServerRelativeUrl

▸ **FromHasServerRelativeUrl**\<`T`\>(`fileSystemEntry`): [`SPPath`](SPPath.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HasServerRelativeUrl`](../interfaces/HasServerRelativeUrl.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileSystemEntry` | `T` |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:93

___

### FromPathLike

▸ **FromPathLike**(`pathLike?`, `rootDir?`): [`SPPath`](SPPath.md)

Get a path from the given path-like object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pathLike?` | [`PathLike`](../modules.md#pathlike) | `undefined` | either a string, file, folder or path |
| `rootDir?` | `string` | `""` | the root directory to use if pathLike is a string |

#### Returns

[`SPPath`](SPPath.md)

the path object

**`Description`**

If the pathLike is null or undefined, it will use the rootDir.
If the pathLike is a path, it will return the same instance.
If the pathLike is a string, it will be appended to the rootDir.
If it starts with the rootDir, the rootDir will be ignored.
If the pathLike is a file or folder, it will use the serverRelativeUrl.

**`Example`**

```ts
const path = Path.FromPathLike("Shared Documents", "/sites/MySite"); // /sites/MySite/Shared Documents
const path = Path.FromPathLike("/sites/MySite/Shared Documents"); // /sites/MySite/Shared Documents
const path = Path.FromPathLike("/sites/MySite/Shared Documents", "/sites/MySite"); // /sites/MySite/Shared Documents
const path = Path.FromPathLike(file);
const path = Path.FromPathLike(folder);
```

#### Defined in

src/filesystem/SPPath.ts:57

___

### FromResponse

▸ **FromResponse**(`response`): [`SPPath`](SPPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`PathResponse`](../interfaces/PathResponse.md) |

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/filesystem/SPPath.ts:30
