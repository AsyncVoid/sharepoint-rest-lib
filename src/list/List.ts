import {ChangeToken} from "../change/index.js";
import {Site} from "../Site.js";
import {SPPath} from "../filesystem/index.js";
import {ListResponse} from "./ListResponse.js";
import {AbstractList} from "./AbstractList.js";

export class List extends AbstractList {
    private readonly _id: string;
    private readonly _listItemEntityTypeFullName: string;
    private readonly _itemCount: number;
    private readonly _title: string;
    private readonly _description: string;
    private readonly _currentChangeToken: ChangeToken;
    private readonly _hidden: boolean;
    private readonly _isPrivate: boolean;
    private readonly _allowContentTypes: boolean;
    private readonly _baseTemplate: number;
    private readonly _baseType: number;
    private readonly _contentTypesEnabled: boolean;
    private readonly _crawlNonDefaultViews: boolean;
    private readonly _created: Date;
    private readonly _defaultContentApprovalWorkflowId: string;
    private readonly _defaultItemOpenUseListSetting: boolean;
    private readonly _direction: string;
    private readonly _disableCommenting: boolean;
    private readonly _disableGridEditing: boolean;
    private readonly _documentTemplateUrl: string;
    private readonly _draftVersionVisibility: number;
    private readonly _enableAttachments: boolean;
    private readonly _enableFolderCreation: boolean;
    private readonly _enableMinorVersion: boolean;
    private readonly _enableModeration: boolean;
    private readonly _enableRequestSignOff: boolean;
    private readonly _enableVersioning: boolean;
    private readonly _entityTypeName: string;
    private readonly _exemptFromBlockDownloadOfNonViewableFiles: boolean;
    private readonly _fileSavePostProcessingEnabled: boolean;
    private readonly _forceCheckout: boolean;
    private readonly _hasExternalDataSource: boolean;
    private readonly _imagePath: SPPath;
    private readonly _imageUrl: string;
    private readonly _defaultSensitivityLabelForLibrary: string;
    private readonly _sensitivityLabelToEncryptOnDownloadForLibrary: null;
    private readonly _irmEnabled: boolean;
    private readonly _irmExpire: boolean;
    private readonly _irmReject: boolean;
    private readonly _isApplicationList: boolean;
    private readonly _isCatalog: boolean;
    private readonly _lastItemDeletedDate: string;
    private readonly _lastItemModifiedDate: string;
    private readonly _lastItemUserModifiedDate: string;
    private readonly _listExperienceOptions: number;
    private readonly _majorVersionLimit: number;
    private readonly _majorWithMinorVersionsLimit: number;
    private readonly _multipleDataList: boolean;
    private readonly _noCrawl: boolean;
    private readonly _parentWebPath: SPPath;
    private readonly _parentWebUrl: string;
    private readonly _parserDisabled: boolean;
    private readonly _serverTemplateCanCreateFolders: boolean;
    private readonly _templateFeatureId: string;

    private constructor(site: Site, id: string, listItemEntityTypeFullName: string, itemCount: number, title: string, description: string, currentChangeToken: ChangeToken, hidden: boolean, isPrivate: boolean, allowContentTypes: boolean, baseTemplate: number, baseType: number, contentTypesEnabled: boolean, crawlNonDefaultViews: boolean, created: Date, defaultContentApprovalWorkflowId: string, defaultItemOpenUseListSetting: boolean, direction: string, disableCommenting: boolean, disableGridEditing: boolean, documentTemplateUrl: string, draftVersionVisibility: number, enableAttachments: boolean, enableFolderCreation: boolean, enableMinorVersion: boolean, enableModeration: boolean, enableRequestSignOff: boolean, enableVersioning: boolean, entityTypeName: string, exemptFromBlockDownloadOfNonViewableFiles: boolean, fileSavePostProcessingEnabled: boolean, forceCheckout: boolean, hasExternalDataSource: boolean, imagePath: SPPath, imageUrl: string, defaultSensitivityLabelForLibrary: string, sensitivityLabelToEncryptOnDownloadForLibrary: null, irmEnabled: boolean, irmExpire: boolean, irmReject: boolean, isApplicationList: boolean, isCatalog: boolean, lastItemDeletedDate: string, lastItemModifiedDate: string, lastItemUserModifiedDate: string, listExperienceOptions: number, majorVersionLimit: number, majorWithMinorVersionsLimit: number, multipleDataList: boolean, noCrawl: boolean, parentWebPath: SPPath, parentWebUrl: string, parserDisabled: boolean, serverTemplateCanCreateFolders: boolean, templateFeatureId: string) {
        super(site);
        this._id = id;
        this._listItemEntityTypeFullName = listItemEntityTypeFullName;
        this._itemCount = itemCount;
        this._title = title;
        this._description = description;
        this._currentChangeToken = currentChangeToken;
        this._hidden = hidden;
        this._isPrivate = isPrivate;
        this._allowContentTypes = allowContentTypes;
        this._baseTemplate = baseTemplate;
        this._baseType = baseType;
        this._contentTypesEnabled = contentTypesEnabled;
        this._crawlNonDefaultViews = crawlNonDefaultViews;
        this._created = created;
        this._defaultContentApprovalWorkflowId = defaultContentApprovalWorkflowId;
        this._defaultItemOpenUseListSetting = defaultItemOpenUseListSetting;
        this._direction = direction;
        this._disableCommenting = disableCommenting;
        this._disableGridEditing = disableGridEditing;
        this._documentTemplateUrl = documentTemplateUrl;
        this._draftVersionVisibility = draftVersionVisibility;
        this._enableAttachments = enableAttachments;
        this._enableFolderCreation = enableFolderCreation;
        this._enableMinorVersion = enableMinorVersion;
        this._enableModeration = enableModeration;
        this._enableRequestSignOff = enableRequestSignOff;
        this._enableVersioning = enableVersioning;
        this._entityTypeName = entityTypeName;
        this._exemptFromBlockDownloadOfNonViewableFiles = exemptFromBlockDownloadOfNonViewableFiles;
        this._fileSavePostProcessingEnabled = fileSavePostProcessingEnabled;
        this._forceCheckout = forceCheckout;
        this._hasExternalDataSource = hasExternalDataSource;
        this._imagePath = imagePath;
        this._imageUrl = imageUrl;
        this._defaultSensitivityLabelForLibrary = defaultSensitivityLabelForLibrary;
        this._sensitivityLabelToEncryptOnDownloadForLibrary = sensitivityLabelToEncryptOnDownloadForLibrary;
        this._irmEnabled = irmEnabled;
        this._irmExpire = irmExpire;
        this._irmReject = irmReject;
        this._isApplicationList = isApplicationList;
        this._isCatalog = isCatalog;
        this._lastItemDeletedDate = lastItemDeletedDate;
        this._lastItemModifiedDate = lastItemModifiedDate;
        this._lastItemUserModifiedDate = lastItemUserModifiedDate;
        this._listExperienceOptions = listExperienceOptions;
        this._majorVersionLimit = majorVersionLimit;
        this._majorWithMinorVersionsLimit = majorWithMinorVersionsLimit;
        this._multipleDataList = multipleDataList;
        this._noCrawl = noCrawl;
        this._parentWebPath = parentWebPath;
        this._parentWebUrl = parentWebUrl;
        this._parserDisabled = parserDisabled;
        this._serverTemplateCanCreateFolders = serverTemplateCanCreateFolders;
        this._templateFeatureId = templateFeatureId;
    }

    get baseUrl(): string {
        return `${this._site.baseUrl}_api/Web/Lists(guid'${this._id}')/`;
    }

    static FromResponse(site: Site, response: ListResponse): List {
        return new List(
            site,
            response.Id,
            response.ListItemEntityTypeFullName,
            response.ItemCount,
            response.Title,
            response.Description,
            ChangeToken.FromResponse(response.CurrentChangeToken),
            response.Hidden,
            response.IsPrivate,
            response.AllowContentTypes,
            response.BaseTemplate,
            response.BaseType,
            response.ContentTypesEnabled,
            response.CrawlNonDefaultViews,
            new Date(response.Created),
            response.DefaultContentApprovalWorkflowId,
            response.DefaultItemOpenUseListSetting,
            response.Direction,
            response.DisableCommenting,
            response.DisableGridEditing,
            response.DocumentTemplateUrl,
            response.DraftVersionVisibility,
            response.EnableAttachments,
            response.EnableFolderCreation,
            response.EnableMinorVersion,
            response.EnableModeration,
            response.EnableRequestSignOff,
            response.EnableVersioning,
            response.EntityTypeName,
            response.ExemptFromBlockDownloadOfNonViewableFiles,
            response.FileSavePostProcessingEnabled,
            response.ForceCheckout,
            response.HasExternalDataSource,
            SPPath.FromResponse(response.ImagePath),
            response.ImageUrl,
            response.DefaultSensitivityLabelForLibrary,
            response.SensitivityLabelToEncryptOnDownloadForLibrary,
            response.IrmEnabled,
            response.IrmExpire,
            response.IrmReject,
            response.IsApplicationList,
            response.IsCatalog,
            response.LastItemDeletedDate,
            response.LastItemModifiedDate,
            response.LastItemUserModifiedDate,
            response.ListExperienceOptions,
            response.MajorVersionLimit,
            response.MajorWithMinorVersionsLimit,
            response.MultipleDataList,
            response.NoCrawl,
            SPPath.FromResponse(response.ParentWebPath),
            response.ParentWebUrl,
            response.ParserDisabled,
            response.ServerTemplateCanCreateFolders,
            response.TemplateFeatureId
        );
    }

    get id(): string {
        return this._id;
    }

    get listItemEntityTypeFullName(): string {
        return this._listItemEntityTypeFullName;
    }

    get itemCount(): number {
        return this._itemCount;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get currentChangeToken(): ChangeToken {
        return this._currentChangeToken;
    }

    get hidden(): boolean {
        return this._hidden;
    }

    get isPrivate(): boolean {
        return this._isPrivate;
    }

    get allowContentTypes(): boolean {
        return this._allowContentTypes;
    }

    get baseTemplate(): number {
        return this._baseTemplate;
    }

    get baseType(): number {
        return this._baseType;
    }

    get contentTypesEnabled(): boolean {
        return this._contentTypesEnabled;
    }

    get crawlNonDefaultViews(): boolean {
        return this._crawlNonDefaultViews;
    }

    get created(): Date {
        return this._created;
    }

    get defaultContentApprovalWorkflowId(): string {
        return this._defaultContentApprovalWorkflowId;
    }

    get defaultItemOpenUseListSetting(): boolean {
        return this._defaultItemOpenUseListSetting;
    }

    get direction(): string {
        return this._direction;
    }

    get disableCommenting(): boolean {
        return this._disableCommenting;
    }

    get disableGridEditing(): boolean {
        return this._disableGridEditing;
    }

    get documentTemplateUrl(): string {
        return this._documentTemplateUrl;
    }

    get draftVersionVisibility(): number {
        return this._draftVersionVisibility;
    }

    get enableAttachments(): boolean {
        return this._enableAttachments;
    }

    get enableFolderCreation(): boolean {
        return this._enableFolderCreation;
    }

    get enableMinorVersion(): boolean {
        return this._enableMinorVersion;
    }

    get enableModeration(): boolean {
        return this._enableModeration;
    }

    get enableRequestSignOff(): boolean {
        return this._enableRequestSignOff;
    }

    get enableVersioning(): boolean {
        return this._enableVersioning;
    }

    get entityTypeName(): string {
        return this._entityTypeName;
    }

    get exemptFromBlockDownloadOfNonViewableFiles(): boolean {
        return this._exemptFromBlockDownloadOfNonViewableFiles;
    }

    get fileSavePostProcessingEnabled(): boolean {
        return this._fileSavePostProcessingEnabled;
    }

    get forceCheckout(): boolean {
        return this._forceCheckout;
    }

    get hasExternalDataSource(): boolean {
        return this._hasExternalDataSource;
    }

    get imagePath(): SPPath {
        return this._imagePath;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get defaultSensitivityLabelForLibrary(): string {
        return this._defaultSensitivityLabelForLibrary;
    }

    get sensitivityLabelToEncryptOnDownloadForLibrary(): null {
        return this._sensitivityLabelToEncryptOnDownloadForLibrary;
    }

    get irmEnabled(): boolean {
        return this._irmEnabled;
    }

    get irmExpire(): boolean {
        return this._irmExpire;
    }

    get irmReject(): boolean {
        return this._irmReject;
    }

    get isApplicationList(): boolean {
        return this._isApplicationList;
    }

    get isCatalog(): boolean {
        return this._isCatalog;
    }

    get lastItemDeletedDate(): string {
        return this._lastItemDeletedDate;
    }

    get lastItemModifiedDate(): string {
        return this._lastItemModifiedDate;
    }

    get lastItemUserModifiedDate(): string {
        return this._lastItemUserModifiedDate;
    }

    get listExperienceOptions(): number {
        return this._listExperienceOptions;
    }

    get majorVersionLimit(): number {
        return this._majorVersionLimit;
    }

    get majorWithMinorVersionsLimit(): number {
        return this._majorWithMinorVersionsLimit;
    }

    get multipleDataList(): boolean {
        return this._multipleDataList;
    }

    get noCrawl(): boolean {
        return this._noCrawl;
    }

    get parentWebPath(): SPPath {
        return this._parentWebPath;
    }

    get parentWebUrl(): string {
        return this._parentWebUrl;
    }

    get parserDisabled(): boolean {
        return this._parserDisabled;
    }

    get serverTemplateCanCreateFolders(): boolean {
        return this._serverTemplateCanCreateFolders;
    }

    get templateFeatureId(): string {
        return this._templateFeatureId;
    }

    toString(): string {
        return this.title;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            id: this.id,
            listItemEntityTypeFullName: this.listItemEntityTypeFullName,
            itemCount: this.itemCount,
            title: this.title,
            description: this.description,
            currentChangeToken: this.currentChangeToken,
            hidden: this.hidden,
            isPrivate: this.isPrivate,
            allowContentTypes: this.allowContentTypes,
            baseTemplate: this.baseTemplate,
            baseType: this.baseType,
            contentTypesEnabled: this.contentTypesEnabled,
            crawlNonDefaultViews: this.crawlNonDefaultViews,
            created: this.created,
            defaultContentApprovalWorkflowId: this.defaultContentApprovalWorkflowId,
            defaultItemOpenUseListSetting: this.defaultItemOpenUseListSetting,
            direction: this.direction,
            disableCommenting: this.disableCommenting,
            disableGridEditing: this.disableGridEditing,
            documentTemplateUrl: this.documentTemplateUrl,
            draftVersionVisibility: this.draftVersionVisibility,
            enableAttachments: this.enableAttachments,
            enableFolderCreation: this.enableFolderCreation,
            enableMinorVersion: this.enableMinorVersion,
            enableModeration: this.enableModeration,
            enableRequestSignOff: this.enableRequestSignOff,
            enableVersioning: this.enableVersioning,
            entityTypeName: this.entityTypeName,
            exemptFromBlockDownloadOfNonViewableFiles: this.exemptFromBlockDownloadOfNonViewableFiles,
            fileSavePostProcessingEnabled: this.fileSavePostProcessingEnabled,
            forceCheckout: this.forceCheckout,
            hasExternalDataSource: this.hasExternalDataSource,
            imagePath: this.imagePath,
            imageUrl: this.imageUrl,
            defaultSensitivityLabelForLibrary: this.defaultSensitivityLabelForLibrary,
            sensitivityLabelToEncryptOnDownloadForLibrary: this.sensitivityLabelToEncryptOnDownloadForLibrary,
            irmEnabled: this.irmEnabled,
            irmExpire: this.irmExpire,
            irmReject: this.irmReject,
            isApplicationList: this.isApplicationList,
            isCatalog: this.isCatalog,
            lastItemDeletedDate: this.lastItemDeletedDate,
            lastItemModifiedDate: this.lastItemModifiedDate,
            lastItemUserModifiedDate: this.lastItemUserModifiedDate,
            listExperienceOptions: this.listExperienceOptions,
            majorVersionLimit: this.majorVersionLimit,
            majorWithMinorVersionsLimit: this.majorWithMinorVersionsLimit,
            multipleDataList: this.multipleDataList,
            noCrawl: this.noCrawl,
            parentWebPath: this.parentWebPath,
            parentWebUrl: this.parentWebUrl,
            parserDisabled: this.parserDisabled,
            serverTemplateCanCreateFolders: this.serverTemplateCanCreateFolders,
            templateFeatureId: this.templateFeatureId
        };
    }

    get(): Promise<List> {
        return Promise.resolve(this);
    }

    createChangeToken(changeTime?: Date) {
        return ChangeToken.CreateListChangeToken(this.id, changeTime);
    }
}
