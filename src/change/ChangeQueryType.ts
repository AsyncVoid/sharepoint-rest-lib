export enum ChangeQueryType {
    Add = "Add",
    Alert = "Alert",
    ContentType = "ContentType",
    DeleteObject = "DeleteObject",
    Field = "Field",
    File = "File",
    Folder = "Folder",
    Item = "Item",
    List = "List",
    Move = "Move",
    Rename = "Rename",
    Site = "Site",
}

export const ALL_CHANGE_TYPES = [
    ChangeQueryType.Add, ChangeQueryType.Alert, ChangeQueryType.ContentType, ChangeQueryType.DeleteObject,
    ChangeQueryType.Field, ChangeQueryType.File, ChangeQueryType.Folder, ChangeQueryType.Item, ChangeQueryType.List,
    ChangeQueryType.Move, ChangeQueryType.Rename, ChangeQueryType.Site
];