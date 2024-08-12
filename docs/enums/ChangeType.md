[sharepoint](../README.md) / [Exports](../modules.md) / ChangeType

# Enumeration: ChangeType

## Table of contents

### Enumeration Members

- [Add](ChangeType.md#add)
- [AssignmentAdd](ChangeType.md#assignmentadd)
- [AssignmentDelete](ChangeType.md#assignmentdelete)
- [DeleteObject](ChangeType.md#deleteobject)
- [ListContentTypeAdd](ChangeType.md#listcontenttypeadd)
- [ListContentTypeDelete](ChangeType.md#listcontenttypedelete)
- [MemberAdd](ChangeType.md#memberadd)
- [MemberDelete](ChangeType.md#memberdelete)
- [MoveAway](ChangeType.md#moveaway)
- [MoveInto](ChangeType.md#moveinto)
- [Navigation](ChangeType.md#navigation)
- [NoChange](ChangeType.md#nochange)
- [Rename](ChangeType.md#rename)
- [Restore](ChangeType.md#restore)
- [RoleAdd](ChangeType.md#roleadd)
- [RoleDelete](ChangeType.md#roledelete)
- [RoleUpdate](ChangeType.md#roleupdate)
- [ScopeAdd](ChangeType.md#scopeadd)
- [ScopeDelete](ChangeType.md#scopedelete)
- [SystemUpdate](ChangeType.md#systemupdate)
- [Update](ChangeType.md#update)

## Enumeration Members

### Add

• **Add** = ``1``

An item is added within the scope of a list, site, site collection, or content database

#### Defined in

src/change/ChangeType.ts:6

___

### AssignmentAdd

• **AssignmentAdd** = ``11``

A user is given permissions to a list with unique permissions.

#### Defined in

src/change/ChangeType.ts:26

___

### AssignmentDelete

• **AssignmentDelete** = ``12``

Permissions are removed for a user in a list with unique permissions.

#### Defined in

src/change/ChangeType.ts:28

___

### DeleteObject

• **DeleteObject** = ``3``

An item is deleted within the scope of a list, site, site collection, or content database.

#### Defined in

src/change/ChangeType.ts:10

___

### ListContentTypeAdd

• **ListContentTypeAdd** = ``19``

#### Defined in

src/change/ChangeType.ts:39

___

### ListContentTypeDelete

• **ListContentTypeDelete** = ``20``

#### Defined in

src/change/ChangeType.ts:40

___

### MemberAdd

• **MemberAdd** = ``13``

A user is added to a group.

#### Defined in

src/change/ChangeType.ts:30

___

### MemberDelete

• **MemberDelete** = ``14``

A user is removed from a group.

#### Defined in

src/change/ChangeType.ts:32

___

### MoveAway

• **MoveAway** = ``5``

Involves the renaming of a non-leaf section within a URL. The item was moved away from the location within the Web site specified by the change. The log will contain either a MoveAway or a MoveInto value for any given change, but not both. If possible, the change is represented as MoveInto.

#### Defined in

src/change/ChangeType.ts:14

___

### MoveInto

• **MoveInto** = ``6``

Involves the renaming of a non-leaf section within a URL. The item was moved into the location within the Web site specified by the change. The log will contain either a MoveAway or a MoveInto value for any given change, but not both.  If possible, the change is represented as MoveInto.

#### Defined in

src/change/ChangeType.ts:16

___

### Navigation

• **Navigation** = ``16``

A change in navigation is made.

#### Defined in

src/change/ChangeType.ts:36

___

### NoChange

• **NoChange** = ``0``

#### Defined in

src/change/ChangeType.ts:4

___

### Rename

• **Rename** = ``4``

The leaf in a URL is renamed.

#### Defined in

src/change/ChangeType.ts:12

___

### Restore

• **Restore** = ``7``

An object is restored from a backup.

#### Defined in

src/change/ChangeType.ts:18

___

### RoleAdd

• **RoleAdd** = ``8``

A role definition is added.

#### Defined in

src/change/ChangeType.ts:20

___

### RoleDelete

• **RoleDelete** = ``9``

A role definition is deleted.

#### Defined in

src/change/ChangeType.ts:22

___

### RoleUpdate

• **RoleUpdate** = ``10``

A role definition is updated.

#### Defined in

src/change/ChangeType.ts:24

___

### ScopeAdd

• **ScopeAdd** = ``17``

#### Defined in

src/change/ChangeType.ts:37

___

### ScopeDelete

• **ScopeDelete** = ``18``

#### Defined in

src/change/ChangeType.ts:38

___

### SystemUpdate

• **SystemUpdate** = ``15``

Changes are made that are global within the scope of the change collection.

#### Defined in

src/change/ChangeType.ts:34

___

### Update

• **Update** = ``2``

An item is modified within the scope of a list, site, site collection, or content database

#### Defined in

src/change/ChangeType.ts:8
