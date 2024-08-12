import {SPFolder} from "./SPFolder.js";
import {SPFile} from "./SPFile.js";
import {SPFileSystemEntry} from "./SPFileSystemEntry.js";
import {PartialFile} from "./PartialFile.js";
import {hasServerRelativeUrl, HasServerRelativeUrl} from "./HasServerRelativeUrl.js";

export interface PathResponse {
    DecodedUrl: string;
}

/**
 * A path to a file or folder
 */
export type PathLike = string | SPPath | SPFolder | SPFile | PartialFile | HasServerRelativeUrl;

const DISALLOWED_CHARS = ["<", ">", ":", "\"", "/", "\\", "|", "?", "*"];

const DISALLOWED_NAMES = [".lock", "CON", "PRN", "AUX", "NUL", "COM0", "COM1", "COM2", "COM3",
    "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "LPT0", "LPT1", "LPT2",
    "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9", "_vti_", "desktop.ini" ];

export class SPPath {

    private readonly _value: string;

    constructor(value: string) {
        this._value = value;
    }

    static FromResponse(response: PathResponse): SPPath {
        return new SPPath(response.DecodedUrl);
    }

    static FromEncoded(encoded: string): SPPath {
        return new SPPath(decodeURIComponent(encoded));
    }

    /**
     * Get a path from the given path-like object
     * @param {PathLike} [pathLike] either a string, file, folder or path
     * @param {string} [rootDir=""] the root directory to use if pathLike is a string
     * @constructor
     * @returns {SPPath} the path object
     * @description
     * If the pathLike is null or undefined, it will use the rootDir.
     * If the pathLike is a path, it will return the same instance.
     * If the pathLike is a string, it will be appended to the rootDir.
     * If it starts with the rootDir, the rootDir will be ignored.
     * If the pathLike is a file or folder, it will use the serverRelativeUrl.
     * @example
     * const path = Path.FromPathLike("Shared Documents", "/sites/MySite"); // /sites/MySite/Shared Documents
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents"); // /sites/MySite/Shared Documents
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents", "/sites/MySite"); // /sites/MySite/Shared Documents
     * const path = Path.FromPathLike(file);
     * const path = Path.FromPathLike(folder);
     */
    static FromPathLike(pathLike?: PathLike, rootDir: string = ""): SPPath {
        if (!pathLike) {
            return new SPPath(rootDir);
        }
        if (pathLike instanceof SPPath) {
            return pathLike.withRoot(rootDir);
        }
        if (pathLike instanceof SPFileSystemEntry) {
            return SPPath.FromFileSystemEntry(pathLike);
        }
        if (hasServerRelativeUrl(pathLike)) {
            return SPPath.FromHasServerRelativeUrl(pathLike);
        }
        return new SPPath(pathLike ?? "").withRoot(rootDir);
    }

    static FromFile(file: SPFile): SPPath {
        return new SPPath(file.serverRelativeUrl);
    }

    static FromFolder(folder: SPFolder): SPPath {
        return new SPPath(folder.serverRelativeUrl);
    }

    static FromFileOrFolder(fileOrFolder: SPFile | SPFolder): SPPath {
        return new SPPath(fileOrFolder.serverRelativeUrl);
    }

    static FromFileSystemEntry(fileSystemEntry: SPFileSystemEntry): SPPath {
        return new SPPath(fileSystemEntry.serverRelativeUrl);
    }

    static FromFileSystemObject<T extends {get serverRelativeUrl(): string}>(fileSystemEntry: T): SPPath {
        return new SPPath(fileSystemEntry.serverRelativeUrl);
    }

    private static FromHasServerRelativeUrl<T extends HasServerRelativeUrl>(fileSystemEntry: T): SPPath {
        return new SPPath(fileSystemEntry.serverRelativeUrl);
    }

    /**
     * Get the path value
     * @returns {string} the path value
     * @description
     * This is the same as calling toString()
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const value = path.value; // "/sites/MySite/Shared Documents"
     */
    get value(): string {
        return this._value;
    }

    /**
     * Get the path value as an encoded string
     * @returns {string} the path value as an encoded string
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const encoded = path.asEncoded(); // "%2Fsites%2FMySite%2FShared%20Documents"
     */
    asEncoded(): string {
        return encodeURIComponent(this._value);
    }

    /**
     * Get all the folders in the path as an array
     * @returns {SPPath[]} the path tree
     * @description
     * The first element is the root folder, the last element is the current folder.
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const tree = path.getPathTree(); // ["/", "/sites", "/sites/MySite", "/sites/MySite/Shared Documents"]
     */
    getPathTree(): SPPath[] {
        const folders = this.getPathChain();
        folders.unshift("");
        const tree: SPPath[] = [];
        let path = "";
        for (const folder of folders) {
            path += `/${folder}`;
            tree.push(new SPPath(path));
        }
        return tree;
    }

    /**
     * Check if the path is disallowed
     * @returns {boolean} true if the path is disallowed
     * @description
     * Checks if the path contains any disallowed characters or file/folder names.<br>
     * Disallowed characters: <b>< > : " / \ | ? *</b><br>
     * Disallowed names: <b>.lock, CON, PRN, AUX, NUL, COM0-9, LPT0-9, _vti_, desktop.ini</b><br>
     * Or any file/folder name that starts with <b>~$</b>
     * @example <caption>Example usage of method1.</caption>
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const isDisallowed = path.isDisallowed(); // false
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents/.lock");
     * const isDisallowed = path.isDisallowed(); // true
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents/~$MyFile.docx");
     * const isDisallowed = path.isDisallowed(); // true
     */
    isDisallowed(): boolean {
        return DISALLOWED_CHARS.some(char => this._value.includes(char)) ||
            DISALLOWED_NAMES.some(word => this.getPathChain().includes(word) || word.startsWith("~$"));
    }

    /**
     * Check if the path is allowed
     * @returns {boolean} true if the path is allowed
     * @description
     * Opposite of {@link SPPath.isDisallowed}
     */
    isAllowed(): boolean {
        return !this.isDisallowed();
    }

    withRoot(root: string): SPPath {
        if (this.value.startsWith(root)) {
            return this;
        }
        return new SPPath(root).child(this.value);
    }

    /**
     * Get the path hierarchy as an array of strings
     * @returns {string[]} the path hierarchy
     * @description
     * The first element is the root folder, the last element is the current folder.
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const hierarchy = path.getPathChain(); // ["sites", "MySite", "Shared Documents"]
     */
    getPathChain(): string[] {
        return this._value.split("/").filter(path => path !== "");
    }

    /**
     * Get the child path from this path
     * @param {string} path the child path
     * @returns {SPPath} the child path
     * @description
     * Adds the given path to the end of this path.
     * Will trim off any leading or trailing slashes.
     * @example
     * const path = Path.FromPathLike("/sites/MySite");
     * const child = path.child("Shared Documents"); // /sites/MySite/Shared Documents
     * @example
     * const path = Path.FromPathLike("/sites/MySite");
     * const child = path.child("/Shared Documents"); // /sites/MySite/Shared Documents
     * @example
     * const path = Path.FromPathLike("/sites/MySite");
     * const child = path.child("Shared Documents/"); // /sites/MySite/Shared Documents
     */
    child(path: string): SPPath {
        const trimmedSlashes = path.replace(/^\/|(?<!\\)\/$/, "");
        return new SPPath(`${this.value}/${trimmedSlashes}`);
    }

    /**
     * Get the parent folder from this path
     * @returns {SPPath} the parent folder
     * @description
     * If the path is a root folder, it will return the same instance.
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * let parent = path.parent(); // /sites/MySite
     * parent = path.parent(); // /sites
     * parent = path.parent(); // /
     * parent = path.parent(); // /
     * parent == parent.parent(); // true
     */
    parent(): SPPath {
        return this.parentAndChildName().parent;
    }

    /**
     * Get the parent folder and child name from this path
     * @returns {{parent: SPPath, name: string}} the parent folder and child name
     * @description
     * If the path is a root folder, it will return the same instance.
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * let parent = path.parentAndChildName(); // {parent: /sites/MySite, name: "Shared Documents"}
     */
    parentAndChildName(): {parent: SPPath, name: string} {
        const folders = this.getPathChain();
        if (folders.length <= 1) {
            return { parent: this, name: "" };
        }
        const name = folders.pop();
        return {parent: new SPPath(folders.join("/")), name };
    }

    /**
     * Get the parent folder and child name from this path
     * @param {string} [name] the child name
     * @returns {{parent: SPPath, name: string}} the parent folder and child name
     * @description
     * If the name is null or undefined, the child name will be the last folder in this path, and this will be the parent folder.
     * If the path is a root folder, it will return the same instance.
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const {parent, name} = path.parentAndChildName(); // {parent: /sites/MySite, name: "Shared Documents"}
     * const parentAndName = parent.parentAndChildName(); // {parent: /sites, name: "MySite"}
     * @example
     * const path = Path.FromPathLike("/sites/MySite/Shared Documents");
     * const {parent, name} = path.parentAndChildName("MyFile.txt"); // {parent: /sites/MySite/Shared Documents, name: "MyFile.txt"}
     */
    parentAndChildWithName(name?: string): {parent: SPPath, name: string} {
        let folderName = name;
        let parentPath: SPPath = this;
        if (!folderName) {
            const {parent, name: childFolderName} = this.parentAndChildName();
            parentPath = parent;
            folderName = childFolderName;
        }

        return {parent: parentPath, name: folderName };
    }

    toString(): string {
        return this.value;
    }

    toJSON(): string {
        return this.value;
    }
}