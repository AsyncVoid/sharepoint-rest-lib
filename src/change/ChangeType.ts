export enum ChangeType {
    NoChange = 0,
    /** An item is added within the scope of a list, site, site collection, or content database */
    Add = 1,
    /** An item is modified within the scope of a list, site, site collection, or content database */
    Update = 2,
    /** An item is deleted within the scope of a list, site, site collection, or content database. */
    DeleteObject = 3,
    /** The leaf in a URL is renamed. */
    Rename = 4,
    /** Involves the renaming of a non-leaf section within a URL. The item was moved away from the location within the Web site specified by the change. The log will contain either a MoveAway or a MoveInto value for any given change, but not both. If possible, the change is represented as MoveInto. */
    MoveAway = 5,
    /** Involves the renaming of a non-leaf section within a URL. The item was moved into the location within the Web site specified by the change. The log will contain either a MoveAway or a MoveInto value for any given change, but not both.  If possible, the change is represented as MoveInto. */
    MoveInto = 6,
    /** An object is restored from a backup. */
    Restore = 7,
    /** A role definition is added. */
    RoleAdd = 8,
    /** A role definition is deleted. */
    RoleDelete = 9,
    /** A role definition is updated. */
    RoleUpdate = 10,
    /** A user is given permissions to a list with unique permissions. */
    AssignmentAdd = 11,
    /** Permissions are removed for a user in a list with unique permissions. */
    AssignmentDelete = 12,
    /** A user is added to a group. */
    MemberAdd = 13,
    /** A user is removed from a group. */
    MemberDelete = 14,
    /** Changes are made that are global within the scope of the change collection. */
    SystemUpdate = 15,
    /** A change in navigation is made. */
    Navigation = 16,
    ScopeAdd = 17,
    ScopeDelete = 18,
    ListContentTypeAdd = 19,
    ListContentTypeDelete = 20
}
