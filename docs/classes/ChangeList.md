[sharepoint](../README.md) / [Exports](../modules.md) / ChangeList

# Class: ChangeList\<T\>

An array, containing a list of change items.
The first item in the array is the oldest change item (the least ticks).
The last item in the array is the latest change item (the most ticks).

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

## Table of contents

### Constructors

- [constructor](ChangeList.md#constructor)

### Properties

- [\_items](ChangeList.md#_items)

### Accessors

- [end](ChangeList.md#end)
- [items](ChangeList.md#items)
- [length](ChangeList.md#length)
- [start](ChangeList.md#start)

### Methods

- [concat](ChangeList.md#concat)
- [filter](ChangeList.md#filter)
- [get](ChangeList.md#get)
- [map](ChangeList.md#map)
- [removeDeletedItems](ChangeList.md#removedeleteditems)
- [removeListIdlessChanges](ChangeList.md#removelistidlesschanges)
- [removeListItemlessChanges](ChangeList.md#removelistitemlesschanges)
- [removeSiteIdlessChanges](ChangeList.md#removesiteidlesschanges)
- [removeWebIdlessChanges](ChangeList.md#removewebidlesschanges)
- [slice](ChangeList.md#slice)
- [splice](ChangeList.md#splice)
- [toJSON](ChangeList.md#tojson)
- [FromResponse](ChangeList.md#fromresponse)

## Constructors

### constructor

• **new ChangeList**\<`T`\>(`items?`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `items` | [`ChangeItem`](ChangeItem.md)\<`T`\>[] | `[]` |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:17

## Properties

### \_items

• `Private` `Readonly` **\_items**: [`ChangeItem`](ChangeItem.md)\<`T`\>[]

#### Defined in

src/change/ChangeList.ts:15

## Accessors

### end

• `get` **end**(): [`ChangeToken`](ChangeToken.md)

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeList.ts:37

___

### items

• `get` **items**(): [`ChangeItem`](ChangeItem.md)\<`T`\>[]

#### Returns

[`ChangeItem`](ChangeItem.md)\<`T`\>[]

#### Defined in

src/change/ChangeList.ts:25

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

src/change/ChangeList.ts:29

___

### start

• `get` **start**(): [`ChangeToken`](ChangeToken.md)

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/change/ChangeList.ts:33

## Methods

### concat

▸ **concat**(`changeList`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeList` | [`ChangeList`](ChangeList.md)\<`T`\> |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:45

___

### filter

▸ **filter**(`predicate`, `thisArg?`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`ChangeItem`](ChangeItem.md)\<`T`\>, `index`: `number`, `changeList`: [`ChangeList`](ChangeList.md)\<`T`\>) => `boolean` |
| `thisArg?` | `any` |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:63

___

### get

▸ **get**(`index`): [`ChangeItem`](ChangeItem.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ChangeItem`](ChangeItem.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:41

___

### map

▸ **map**\<`U`\>(`callbackFn`, `thisArg?`): `U`[]

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFn` | (`value`: [`ChangeItem`](ChangeItem.md)\<`T`\>, `index`: `number`, `changeList`: [`ChangeList`](ChangeList.md)\<`T`\>) => `U` |
| `thisArg?` | `any` |

#### Returns

`U`[]

#### Defined in

src/change/ChangeList.ts:57

___

### removeDeletedItems

▸ **removeDeletedItems**(): [`ChangeList`](ChangeList.md)\<`T`\>

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:85

___

### removeListIdlessChanges

▸ **removeListIdlessChanges**(): [`ChangeList`](ChangeList.md)\<`T`\>

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:73

___

### removeListItemlessChanges

▸ **removeListItemlessChanges**(): [`ChangeList`](ChangeList.md)\<`T`\>

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:69

___

### removeSiteIdlessChanges

▸ **removeSiteIdlessChanges**(): [`ChangeList`](ChangeList.md)\<`T`\>

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:81

___

### removeWebIdlessChanges

▸ **removeWebIdlessChanges**(): [`ChangeList`](ChangeList.md)\<`T`\>

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:77

___

### slice

▸ **slice**(`start?`, `end?`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:49

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `deleteCount?` | `number` |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:53

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

src/change/ChangeList.ts:106

___

### FromResponse

▸ **FromResponse**\<`T`\>(`list`, `response`): [`ChangeList`](ChangeList.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractList`](AbstractList.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T` |
| `response` | [`ChangeListResponse`](../interfaces/ChangeListResponse.md) |

#### Returns

[`ChangeList`](ChangeList.md)\<`T`\>

#### Defined in

src/change/ChangeList.ts:21
