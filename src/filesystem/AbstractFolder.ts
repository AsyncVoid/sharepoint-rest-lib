import {SPFolder} from "./SPFolder.js";
import {RequestSender} from "../RequestSender.js";
import {Site} from "../Site.js";
import {ErrorKind} from "../SPError.js";
import {SPFile} from "./SPFile.js";
import {ExpandedUserInfoItem} from "../user/index.js";
import {FolderResponse} from "./FolderResponse.js";
import {TreeNodeFolder} from "./TreeNode.js";
import {FileResponse} from "./FileResponse.js";
import {FileWithAuthor} from "./FileWithAuthor.js";
import {FileWithAuthorResponse} from "./FileWithAuthorResponse.js";
import {ExpansionUserInfoItemKeys} from "../user/UserInfoItemResponse.js";

export abstract class AbstractFolder extends RequestSender {
    protected readonly _site: Site;

    protected constructor(site: Site) {
        super();
        this._site = site;
    }

    dontThrowFor(): ErrorKind[] {
        return [];
    }

    getAuth(): Promise<string> {
        return this._site.getAuth();
    }

    protected get site(): Site {
        return this._site;
    }

    public async get(): Promise<SPFolder> {
        return SPFolder.FromResponse(this.site, await this.getRequest<FolderResponse>(""));
    }

    /**
     * Gets the files within this folder
     * @returns {Promise<SPFile[]>} The files within this folder
     * @example
     * const folder : SPFolder = await site.getFolder("/Shared Documents");
     * const files = await folder.getFiles();
     * console.log(files.length); // 5
     * console.log(files[0].name); // "MyFile.docx"
     * @example
     * const partialFolder : PartialFolderByPath = site.getPartialFolderByPath("/Shared Documents");
     * const files = await partialFolder.getFiles();
     * console.log(files.length); // 5
     * console.log(files[0].name); // "MyFile.docx"
     * @see
     * {@link SPFolder.getWithFiles} for a more efficient way to get the folder as well as the files within it (for partial folders)
     */
    public async getFiles(): Promise<SPFile[]> {
        const response = await this.getRequest<{value: FileResponse[]}>("Files");
        // console.log("Response Files:", response);
        return (response.value || []).map((fileResponse: FileResponse) => SPFile.FromResponse(this.site, fileResponse));
    }

    /**
     * Gets this folder and the files within it
     * @returns {Promise<{folder: SPFolder, files: SPFile[]}>} The folder and the files within it
     * @example
     * const {folder, files} = await site.getPartialFolder("/Shared Documents").getWithFiles();
     * console.log(folder.name); // "Shared Documents"
     * console.log(files.length); // 5
     * console.log(files[0].name); // "MyFile.docx"
     */
    public async getWithFiles(): Promise<{folder: SPFolder, files: SPFile[]}> {
        const response = await this.getRequest<FolderResponse & {Files: FileResponse[]}>("?$expand=Files");
        // console.log("Response Files:", response);
        return {
            folder: SPFolder.FromResponse(this.site, response),
            files: (response.Files || []).map((fileResponse: FileResponse) => SPFile.FromResponse(this.site, fileResponse))
        };
    }

    /**
     * Gets the (sub-)folders within this folder
     * @returns {Promise<SPFolder[]>} The folders within this folder
     * @example
     * const folder : SPFolder = await site.getFolder("/Shared Documents");
     * const folders = await folder.getFolders();
     * console.log(folders.length); // 2
     * console.log(folders[0].name); // "Folder 1"
     * @example
     * const partialFolder : PartialFolderByPath = site.getPartialFolderByPath("/Shared Documents");
     * const folders = await partialFolder.getFolders();
     * console.log(folders.length); // 2
     * console.log(folders[0].name); // "Folder 1"
     * @see
     * {@link SPFolder.getWithFolders} for a more efficient way to get the folder as well as the folders within it (for partial folders)
     */
    public async getFolders(): Promise<SPFolder[]> {
        const response = await this.getRequest<{value: FolderResponse[]}>("Folders");
        // console.log("Response Folders:", response);
        return (response.value || []).map((folderResponse: FolderResponse) => SPFolder.FromResponse(this.site, folderResponse));
    }

    /**
     * Gets this folder and the folders within it
     * @returns {Promise<{folder: SPFolder, folders: SPFolder[]}>} The folder and the folders within it
     * @example
     * const {folder, folders} = await site.getPartialFolder("/Shared Documents").getWithFolders();
     * console.log(folder.name); // "Shared Documents"
     * console.log(folders.length); // 2
     * console.log(folders[0].name); // "Folder 1"
     */
    public async getWithFolders(): Promise<{folder: SPFolder, folders: SPFolder[]}> {
        const response = await this.getRequest<FolderResponse & {Folders: FolderResponse[]}>("?$expand=Folders");
        // console.log("Response Folders:", response);
        return {
            folder: SPFolder.FromResponse(this.site, response),
            folders: (response.Folders || []).map((folderResponse: FolderResponse) => SPFolder.FromResponse(this.site, folderResponse))
        };
    }

    /**
     * Gets this folder and the files and folders within it
     * @returns {Promise<{folder: SPFolder, files: SPFile[], folders: SPFolder[]}>} The folder and the files and folders within it
     * @example
     * const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getWithFilesAndFolders();
     * console.log(folder.name); // "Shared Documents"
     * console.log(files.length); // 5
     * console.log(files[0].name); // "MyFile.docx"
     * console.log(folders.length); // 2
     * console.log(folders[0].name); // "Folder 1"
     */
    public async getWithFilesAndFolders(): Promise<{folder: SPFolder, files: SPFile[], folders: SPFolder[]}> {
        const response = await this.getRequest<FolderResponse & {Files: FileResponse[], Folders: FolderResponse[]}>("?$expand=Files,Folders");
        // console.log("Response Files:", response);
        return {
            folder: SPFolder.FromResponse(this.site, response),
            files: (response.Files || []).map((fileResponse: FileResponse) => SPFile.FromResponse(this.site, fileResponse)),
            folders: (response.Folders || []).map((folderResponse: FolderResponse) => SPFolder.FromResponse(this.site, folderResponse))
        };
    }

    /**
     * Gets this folder and the files and folders within it, as well as the author of each file.
     * Note: The author's ID, Title and Email will be included, but the other properties might not.
     * Note: This will only use one request, but it will be a large request.
     * @returns {Promise<{folder: SPFolder, files: FileWithAuthor[], folders: SPFolder[]}>} The folder and the files and folders within it, as well as the author of each file
     * @example
     * const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getWithFilesAuthorsAndFolders();
     * console.log(folder.name); // "Shared Documents"
     * console.log(files.length); // 5
     * console.log(files[0].file.name); // "MyFile.docx"
     * console.log(files[0].author.title); // "John Doe"
     * console.log(folders.length); // 2
     * console.log(folders[0].name); // "Folder 1"
     */
    public async getWithFilesAuthorsAndFolders(): Promise<{folder: SPFolder, files: FileWithAuthor[], folders: SPFolder[]}> {
        const select = ["Files/", "Folders/", ""].map(prefix => ExpansionUserInfoItemKeys.map(key => `${prefix}Author/${key}`).join(",") + `,${prefix}*`).join(",");
        const expansion = "Files,Folders,Author,Files/Author,Folders/Author";

        // console.log("Select:", select);
        // console.log("Expansion:", expansion);

        const response = await this.getRequest<FolderResponse & {Files: FileWithAuthorResponse[], Folders: FolderResponse[]}>(`?$expand=${expansion}&$select=${select}`);
        //console.log("Response Files:", JSON.stringify(response, null, 4));
        return {
            folder: SPFolder.FromResponse(this.site, response),
            files: (response.Files || []).map((fileResponse: FileWithAuthorResponse) => ({
                file: SPFile.FromResponse(this.site, fileResponse),
                author: ExpandedUserInfoItem.FromResponse(fileResponse.Author)
            })),
            folders: (response.Folders || []).map((folderResponse: FolderResponse) => SPFolder.FromResponse(this.site, folderResponse))
        };
    }

    /**
     * Gets this folder and the files and folders within it, in a tree structure. Recursive.
     * @returns {Promise<TreeNodeFolder>} The folder and the files and folders within it, in a tree structure
     * @example
     * const {folder, files, folders} = await site.getPartialFolder("/Shared Documents").getSubTree();
     * console.log(type); // "SP.Folder"
     * console.log(value.name); // "Shared Documents"
     * console.log(files.length); // 5
     * console.log(files[0].type); // "SP.File"
     * console.log(files[0].value.name); // "MyFile.docx"
     * console.log(folders.length); // 2
     * console.log(folders[0].type); // "SP.Folder"
     * console.log(folders[0].value.name); // "Folder 1"
     * console.log(folders[0].folders.length) // 1
     * console.log(folders[0].folders[0].type); // "SP.Folder"
     * console.log(folders[0].folders[0].value.name); // "Folder 1.1"
     */
    public async getSubTree(): Promise<TreeNodeFolder> {
        const filesAndFolders = await this.getWithFilesAndFolders();
        return {
            type: "SP.Folder",
            value: filesAndFolders.folder,
            files: filesAndFolders.files.map((file) => ({type: "SP.File", value: file})),
            folders: await Promise.all(filesAndFolders.folders.map((folder) => folder.getSubTree()))
        };
    }

    /**
     * Deletes this folder without sending it to the recycle bin
     * @returns {Promise<void>} A promise that resolves when the folder is deleted
     */
    public async delete(): Promise<void> {
        return this.postRequest("DeleteObject()");
    }
}
