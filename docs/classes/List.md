[sharepoint](../README.md) / [Exports](../modules.md) / List

# Class: List

## Hierarchy

- [`AbstractList`](AbstractList.md)

  ↳ **`List`**

## Table of contents

### Constructors

- [constructor](List.md#constructor)

### Properties

- [\_allowContentTypes](List.md#_allowcontenttypes)
- [\_baseTemplate](List.md#_basetemplate)
- [\_baseType](List.md#_basetype)
- [\_contentTypesEnabled](List.md#_contenttypesenabled)
- [\_crawlNonDefaultViews](List.md#_crawlnondefaultviews)
- [\_created](List.md#_created)
- [\_currentChangeToken](List.md#_currentchangetoken)
- [\_defaultContentApprovalWorkflowId](List.md#_defaultcontentapprovalworkflowid)
- [\_defaultItemOpenUseListSetting](List.md#_defaultitemopenuselistsetting)
- [\_defaultSensitivityLabelForLibrary](List.md#_defaultsensitivitylabelforlibrary)
- [\_description](List.md#_description)
- [\_direction](List.md#_direction)
- [\_disableCommenting](List.md#_disablecommenting)
- [\_disableGridEditing](List.md#_disablegridediting)
- [\_documentTemplateUrl](List.md#_documenttemplateurl)
- [\_draftVersionVisibility](List.md#_draftversionvisibility)
- [\_enableAttachments](List.md#_enableattachments)
- [\_enableFolderCreation](List.md#_enablefoldercreation)
- [\_enableMinorVersion](List.md#_enableminorversion)
- [\_enableModeration](List.md#_enablemoderation)
- [\_enableRequestSignOff](List.md#_enablerequestsignoff)
- [\_enableVersioning](List.md#_enableversioning)
- [\_entityTypeName](List.md#_entitytypename)
- [\_exemptFromBlockDownloadOfNonViewableFiles](List.md#_exemptfromblockdownloadofnonviewablefiles)
- [\_fileSavePostProcessingEnabled](List.md#_filesavepostprocessingenabled)
- [\_forceCheckout](List.md#_forcecheckout)
- [\_hasExternalDataSource](List.md#_hasexternaldatasource)
- [\_hidden](List.md#_hidden)
- [\_id](List.md#_id)
- [\_imagePath](List.md#_imagepath)
- [\_imageUrl](List.md#_imageurl)
- [\_irmEnabled](List.md#_irmenabled)
- [\_irmExpire](List.md#_irmexpire)
- [\_irmReject](List.md#_irmreject)
- [\_isApplicationList](List.md#_isapplicationlist)
- [\_isCatalog](List.md#_iscatalog)
- [\_isPrivate](List.md#_isprivate)
- [\_itemCount](List.md#_itemcount)
- [\_lastItemDeletedDate](List.md#_lastitemdeleteddate)
- [\_lastItemModifiedDate](List.md#_lastitemmodifieddate)
- [\_lastItemUserModifiedDate](List.md#_lastitemusermodifieddate)
- [\_listExperienceOptions](List.md#_listexperienceoptions)
- [\_listItemEntityTypeFullName](List.md#_listitementitytypefullname)
- [\_majorVersionLimit](List.md#_majorversionlimit)
- [\_majorWithMinorVersionsLimit](List.md#_majorwithminorversionslimit)
- [\_multipleDataList](List.md#_multipledatalist)
- [\_noCrawl](List.md#_nocrawl)
- [\_parentWebPath](List.md#_parentwebpath)
- [\_parentWebUrl](List.md#_parentweburl)
- [\_parserDisabled](List.md#_parserdisabled)
- [\_sensitivityLabelToEncryptOnDownloadForLibrary](List.md#_sensitivitylabeltoencryptondownloadforlibrary)
- [\_serverTemplateCanCreateFolders](List.md#_servertemplatecancreatefolders)
- [\_site](List.md#_site)
- [\_templateFeatureId](List.md#_templatefeatureid)
- [\_title](List.md#_title)

### Accessors

- [allowContentTypes](List.md#allowcontenttypes)
- [baseTemplate](List.md#basetemplate)
- [baseType](List.md#basetype)
- [baseUrl](List.md#baseurl)
- [contentTypesEnabled](List.md#contenttypesenabled)
- [crawlNonDefaultViews](List.md#crawlnondefaultviews)
- [created](List.md#created)
- [currentChangeToken](List.md#currentchangetoken)
- [defaultContentApprovalWorkflowId](List.md#defaultcontentapprovalworkflowid)
- [defaultItemOpenUseListSetting](List.md#defaultitemopenuselistsetting)
- [defaultSensitivityLabelForLibrary](List.md#defaultsensitivitylabelforlibrary)
- [description](List.md#description)
- [direction](List.md#direction)
- [disableCommenting](List.md#disablecommenting)
- [disableGridEditing](List.md#disablegridediting)
- [documentTemplateUrl](List.md#documenttemplateurl)
- [draftVersionVisibility](List.md#draftversionvisibility)
- [enableAttachments](List.md#enableattachments)
- [enableFolderCreation](List.md#enablefoldercreation)
- [enableMinorVersion](List.md#enableminorversion)
- [enableModeration](List.md#enablemoderation)
- [enableRequestSignOff](List.md#enablerequestsignoff)
- [enableVersioning](List.md#enableversioning)
- [entityTypeName](List.md#entitytypename)
- [exemptFromBlockDownloadOfNonViewableFiles](List.md#exemptfromblockdownloadofnonviewablefiles)
- [fileSavePostProcessingEnabled](List.md#filesavepostprocessingenabled)
- [forceCheckout](List.md#forcecheckout)
- [hasExternalDataSource](List.md#hasexternaldatasource)
- [hidden](List.md#hidden)
- [id](List.md#id)
- [imagePath](List.md#imagepath)
- [imageUrl](List.md#imageurl)
- [irmEnabled](List.md#irmenabled)
- [irmExpire](List.md#irmexpire)
- [irmReject](List.md#irmreject)
- [isApplicationList](List.md#isapplicationlist)
- [isCatalog](List.md#iscatalog)
- [isPrivate](List.md#isprivate)
- [itemCount](List.md#itemcount)
- [lastItemDeletedDate](List.md#lastitemdeleteddate)
- [lastItemModifiedDate](List.md#lastitemmodifieddate)
- [lastItemUserModifiedDate](List.md#lastitemusermodifieddate)
- [listExperienceOptions](List.md#listexperienceoptions)
- [listItemEntityTypeFullName](List.md#listitementitytypefullname)
- [majorVersionLimit](List.md#majorversionlimit)
- [majorWithMinorVersionsLimit](List.md#majorwithminorversionslimit)
- [multipleDataList](List.md#multipledatalist)
- [noCrawl](List.md#nocrawl)
- [parentWebPath](List.md#parentwebpath)
- [parentWebUrl](List.md#parentweburl)
- [parserDisabled](List.md#parserdisabled)
- [sensitivityLabelToEncryptOnDownloadForLibrary](List.md#sensitivitylabeltoencryptondownloadforlibrary)
- [serverTemplateCanCreateFolders](List.md#servertemplatecancreatefolders)
- [site](List.md#site)
- [templateFeatureId](List.md#templatefeatureid)
- [title](List.md#title)

### Methods

- [createChangeToken](List.md#createchangetoken)
- [deleteRequest](List.md#deleterequest)
- [dontThrowFor](List.md#dontthrowfor)
- [get](List.md#get)
- [getAuth](List.md#getauth)
- [getChanges](List.md#getchanges)
- [getItemById](List.md#getitembyid)
- [getItemByIdWithFileOrFolder](List.md#getitembyidwithfileorfolder)
- [getPartialItemById](List.md#getpartialitembyid)
- [getRequest](List.md#getrequest)
- [getSubscriptions](List.md#getsubscriptions)
- [patchRequest](List.md#patchrequest)
- [postRequest](List.md#postrequest)
- [putRequest](List.md#putrequest)
- [toJSON](List.md#tojson)
- [toString](List.md#tostring)
- [FromResponse](List.md#fromresponse)

## Constructors

### constructor

• **new List**(`site`, `id`, `listItemEntityTypeFullName`, `itemCount`, `title`, `description`, `currentChangeToken`, `hidden`, `isPrivate`, `allowContentTypes`, `baseTemplate`, `baseType`, `contentTypesEnabled`, `crawlNonDefaultViews`, `created`, `defaultContentApprovalWorkflowId`, `defaultItemOpenUseListSetting`, `direction`, `disableCommenting`, `disableGridEditing`, `documentTemplateUrl`, `draftVersionVisibility`, `enableAttachments`, `enableFolderCreation`, `enableMinorVersion`, `enableModeration`, `enableRequestSignOff`, `enableVersioning`, `entityTypeName`, `exemptFromBlockDownloadOfNonViewableFiles`, `fileSavePostProcessingEnabled`, `forceCheckout`, `hasExternalDataSource`, `imagePath`, `imageUrl`, `defaultSensitivityLabelForLibrary`, `sensitivityLabelToEncryptOnDownloadForLibrary`, `irmEnabled`, `irmExpire`, `irmReject`, `isApplicationList`, `isCatalog`, `lastItemDeletedDate`, `lastItemModifiedDate`, `lastItemUserModifiedDate`, `listExperienceOptions`, `majorVersionLimit`, `majorWithMinorVersionsLimit`, `multipleDataList`, `noCrawl`, `parentWebPath`, `parentWebUrl`, `parserDisabled`, `serverTemplateCanCreateFolders`, `templateFeatureId`): [`List`](List.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `id` | `string` |
| `listItemEntityTypeFullName` | `string` |
| `itemCount` | `number` |
| `title` | `string` |
| `description` | `string` |
| `currentChangeToken` | [`ChangeToken`](ChangeToken.md) |
| `hidden` | `boolean` |
| `isPrivate` | `boolean` |
| `allowContentTypes` | `boolean` |
| `baseTemplate` | `number` |
| `baseType` | `number` |
| `contentTypesEnabled` | `boolean` |
| `crawlNonDefaultViews` | `boolean` |
| `created` | `Date` |
| `defaultContentApprovalWorkflowId` | `string` |
| `defaultItemOpenUseListSetting` | `boolean` |
| `direction` | `string` |
| `disableCommenting` | `boolean` |
| `disableGridEditing` | `boolean` |
| `documentTemplateUrl` | `string` |
| `draftVersionVisibility` | `number` |
| `enableAttachments` | `boolean` |
| `enableFolderCreation` | `boolean` |
| `enableMinorVersion` | `boolean` |
| `enableModeration` | `boolean` |
| `enableRequestSignOff` | `boolean` |
| `enableVersioning` | `boolean` |
| `entityTypeName` | `string` |
| `exemptFromBlockDownloadOfNonViewableFiles` | `boolean` |
| `fileSavePostProcessingEnabled` | `boolean` |
| `forceCheckout` | `boolean` |
| `hasExternalDataSource` | `boolean` |
| `imagePath` | [`SPPath`](SPPath.md) |
| `imageUrl` | `string` |
| `defaultSensitivityLabelForLibrary` | `string` |
| `sensitivityLabelToEncryptOnDownloadForLibrary` | ``null`` |
| `irmEnabled` | `boolean` |
| `irmExpire` | `boolean` |
| `irmReject` | `boolean` |
| `isApplicationList` | `boolean` |
| `isCatalog` | `boolean` |
| `lastItemDeletedDate` | `string` |
| `lastItemModifiedDate` | `string` |
| `lastItemUserModifiedDate` | `string` |
| `listExperienceOptions` | `number` |
| `majorVersionLimit` | `number` |
| `majorWithMinorVersionsLimit` | `number` |
| `multipleDataList` | `boolean` |
| `noCrawl` | `boolean` |
| `parentWebPath` | [`SPPath`](SPPath.md) |
| `parentWebUrl` | `string` |
| `parserDisabled` | `boolean` |
| `serverTemplateCanCreateFolders` | `boolean` |
| `templateFeatureId` | `string` |

#### Returns

[`List`](List.md)

#### Overrides

[AbstractList](AbstractList.md).[constructor](AbstractList.md#constructor)

#### Defined in

src/list/List.ts:63

## Properties

### \_allowContentTypes

• `Private` `Readonly` **\_allowContentTypes**: `boolean`

#### Defined in

src/list/List.ts:16

___

### \_baseTemplate

• `Private` `Readonly` **\_baseTemplate**: `number`

#### Defined in

src/list/List.ts:17

___

### \_baseType

• `Private` `Readonly` **\_baseType**: `number`

#### Defined in

src/list/List.ts:18

___

### \_contentTypesEnabled

• `Private` `Readonly` **\_contentTypesEnabled**: `boolean`

#### Defined in

src/list/List.ts:19

___

### \_crawlNonDefaultViews

• `Private` `Readonly` **\_crawlNonDefaultViews**: `boolean`

#### Defined in

src/list/List.ts:20

___

### \_created

• `Private` `Readonly` **\_created**: `Date`

#### Defined in

src/list/List.ts:21

___

### \_currentChangeToken

• `Private` `Readonly` **\_currentChangeToken**: [`ChangeToken`](ChangeToken.md)

#### Defined in

src/list/List.ts:13

___

### \_defaultContentApprovalWorkflowId

• `Private` `Readonly` **\_defaultContentApprovalWorkflowId**: `string`

#### Defined in

src/list/List.ts:22

___

### \_defaultItemOpenUseListSetting

• `Private` `Readonly` **\_defaultItemOpenUseListSetting**: `boolean`

#### Defined in

src/list/List.ts:23

___

### \_defaultSensitivityLabelForLibrary

• `Private` `Readonly` **\_defaultSensitivityLabelForLibrary**: `string`

#### Defined in

src/list/List.ts:42

___

### \_description

• `Private` `Readonly` **\_description**: `string`

#### Defined in

src/list/List.ts:12

___

### \_direction

• `Private` `Readonly` **\_direction**: `string`

#### Defined in

src/list/List.ts:24

___

### \_disableCommenting

• `Private` `Readonly` **\_disableCommenting**: `boolean`

#### Defined in

src/list/List.ts:25

___

### \_disableGridEditing

• `Private` `Readonly` **\_disableGridEditing**: `boolean`

#### Defined in

src/list/List.ts:26

___

### \_documentTemplateUrl

• `Private` `Readonly` **\_documentTemplateUrl**: `string`

#### Defined in

src/list/List.ts:27

___

### \_draftVersionVisibility

• `Private` `Readonly` **\_draftVersionVisibility**: `number`

#### Defined in

src/list/List.ts:28

___

### \_enableAttachments

• `Private` `Readonly` **\_enableAttachments**: `boolean`

#### Defined in

src/list/List.ts:29

___

### \_enableFolderCreation

• `Private` `Readonly` **\_enableFolderCreation**: `boolean`

#### Defined in

src/list/List.ts:30

___

### \_enableMinorVersion

• `Private` `Readonly` **\_enableMinorVersion**: `boolean`

#### Defined in

src/list/List.ts:31

___

### \_enableModeration

• `Private` `Readonly` **\_enableModeration**: `boolean`

#### Defined in

src/list/List.ts:32

___

### \_enableRequestSignOff

• `Private` `Readonly` **\_enableRequestSignOff**: `boolean`

#### Defined in

src/list/List.ts:33

___

### \_enableVersioning

• `Private` `Readonly` **\_enableVersioning**: `boolean`

#### Defined in

src/list/List.ts:34

___

### \_entityTypeName

• `Private` `Readonly` **\_entityTypeName**: `string`

#### Defined in

src/list/List.ts:35

___

### \_exemptFromBlockDownloadOfNonViewableFiles

• `Private` `Readonly` **\_exemptFromBlockDownloadOfNonViewableFiles**: `boolean`

#### Defined in

src/list/List.ts:36

___

### \_fileSavePostProcessingEnabled

• `Private` `Readonly` **\_fileSavePostProcessingEnabled**: `boolean`

#### Defined in

src/list/List.ts:37

___

### \_forceCheckout

• `Private` `Readonly` **\_forceCheckout**: `boolean`

#### Defined in

src/list/List.ts:38

___

### \_hasExternalDataSource

• `Private` `Readonly` **\_hasExternalDataSource**: `boolean`

#### Defined in

src/list/List.ts:39

___

### \_hidden

• `Private` `Readonly` **\_hidden**: `boolean`

#### Defined in

src/list/List.ts:14

___

### \_id

• `Private` `Readonly` **\_id**: `string`

#### Defined in

src/list/List.ts:8

___

### \_imagePath

• `Private` `Readonly` **\_imagePath**: [`SPPath`](SPPath.md)

#### Defined in

src/list/List.ts:40

___

### \_imageUrl

• `Private` `Readonly` **\_imageUrl**: `string`

#### Defined in

src/list/List.ts:41

___

### \_irmEnabled

• `Private` `Readonly` **\_irmEnabled**: `boolean`

#### Defined in

src/list/List.ts:44

___

### \_irmExpire

• `Private` `Readonly` **\_irmExpire**: `boolean`

#### Defined in

src/list/List.ts:45

___

### \_irmReject

• `Private` `Readonly` **\_irmReject**: `boolean`

#### Defined in

src/list/List.ts:46

___

### \_isApplicationList

• `Private` `Readonly` **\_isApplicationList**: `boolean`

#### Defined in

src/list/List.ts:47

___

### \_isCatalog

• `Private` `Readonly` **\_isCatalog**: `boolean`

#### Defined in

src/list/List.ts:48

___

### \_isPrivate

• `Private` `Readonly` **\_isPrivate**: `boolean`

#### Defined in

src/list/List.ts:15

___

### \_itemCount

• `Private` `Readonly` **\_itemCount**: `number`

#### Defined in

src/list/List.ts:10

___

### \_lastItemDeletedDate

• `Private` `Readonly` **\_lastItemDeletedDate**: `string`

#### Defined in

src/list/List.ts:49

___

### \_lastItemModifiedDate

• `Private` `Readonly` **\_lastItemModifiedDate**: `string`

#### Defined in

src/list/List.ts:50

___

### \_lastItemUserModifiedDate

• `Private` `Readonly` **\_lastItemUserModifiedDate**: `string`

#### Defined in

src/list/List.ts:51

___

### \_listExperienceOptions

• `Private` `Readonly` **\_listExperienceOptions**: `number`

#### Defined in

src/list/List.ts:52

___

### \_listItemEntityTypeFullName

• `Private` `Readonly` **\_listItemEntityTypeFullName**: `string`

#### Defined in

src/list/List.ts:9

___

### \_majorVersionLimit

• `Private` `Readonly` **\_majorVersionLimit**: `number`

#### Defined in

src/list/List.ts:53

___

### \_majorWithMinorVersionsLimit

• `Private` `Readonly` **\_majorWithMinorVersionsLimit**: `number`

#### Defined in

src/list/List.ts:54

___

### \_multipleDataList

• `Private` `Readonly` **\_multipleDataList**: `boolean`

#### Defined in

src/list/List.ts:55

___

### \_noCrawl

• `Private` `Readonly` **\_noCrawl**: `boolean`

#### Defined in

src/list/List.ts:56

___

### \_parentWebPath

• `Private` `Readonly` **\_parentWebPath**: [`SPPath`](SPPath.md)

#### Defined in

src/list/List.ts:57

___

### \_parentWebUrl

• `Private` `Readonly` **\_parentWebUrl**: `string`

#### Defined in

src/list/List.ts:58

___

### \_parserDisabled

• `Private` `Readonly` **\_parserDisabled**: `boolean`

#### Defined in

src/list/List.ts:59

___

### \_sensitivityLabelToEncryptOnDownloadForLibrary

• `Private` `Readonly` **\_sensitivityLabelToEncryptOnDownloadForLibrary**: ``null``

#### Defined in

src/list/List.ts:43

___

### \_serverTemplateCanCreateFolders

• `Private` `Readonly` **\_serverTemplateCanCreateFolders**: `boolean`

#### Defined in

src/list/List.ts:60

___

### \_site

• `Protected` `Readonly` **\_site**: [`Site`](Site.md)

#### Inherited from

[AbstractList](AbstractList.md).[_site](AbstractList.md#_site)

#### Defined in

src/list/AbstractList.ts:11

___

### \_templateFeatureId

• `Private` `Readonly` **\_templateFeatureId**: `string`

#### Defined in

src/list/List.ts:61

___

### \_title

• `Private` `Readonly` **\_title**: `string`

#### Defined in

src/list/List.ts:11

## Accessors

### allowContentTypes

• `get` **allowContentTypes**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:217

___

### baseTemplate

• `get` **baseTemplate**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:221

___

### baseType

• `get` **baseType**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:225

___

### baseUrl

• `get` **baseUrl**(): `string`

#### Returns

`string`

#### Overrides

AbstractList.baseUrl

#### Defined in

src/list/List.ts:121

___

### contentTypesEnabled

• `get` **contentTypesEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:229

___

### crawlNonDefaultViews

• `get` **crawlNonDefaultViews**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:233

___

### created

• `get` **created**(): `Date`

#### Returns

`Date`

#### Defined in

src/list/List.ts:237

___

### currentChangeToken

• `get` **currentChangeToken**(): [`ChangeToken`](ChangeToken.md)

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/list/List.ts:205

___

### defaultContentApprovalWorkflowId

• `get` **defaultContentApprovalWorkflowId**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:241

___

### defaultItemOpenUseListSetting

• `get` **defaultItemOpenUseListSetting**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:245

___

### defaultSensitivityLabelForLibrary

• `get` **defaultSensitivityLabelForLibrary**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:321

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:201

___

### direction

• `get` **direction**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:249

___

### disableCommenting

• `get` **disableCommenting**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:253

___

### disableGridEditing

• `get` **disableGridEditing**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:257

___

### documentTemplateUrl

• `get` **documentTemplateUrl**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:261

___

### draftVersionVisibility

• `get` **draftVersionVisibility**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:265

___

### enableAttachments

• `get` **enableAttachments**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:269

___

### enableFolderCreation

• `get` **enableFolderCreation**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:273

___

### enableMinorVersion

• `get` **enableMinorVersion**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:277

___

### enableModeration

• `get` **enableModeration**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:281

___

### enableRequestSignOff

• `get` **enableRequestSignOff**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:285

___

### enableVersioning

• `get` **enableVersioning**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:289

___

### entityTypeName

• `get` **entityTypeName**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:293

___

### exemptFromBlockDownloadOfNonViewableFiles

• `get` **exemptFromBlockDownloadOfNonViewableFiles**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:297

___

### fileSavePostProcessingEnabled

• `get` **fileSavePostProcessingEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:301

___

### forceCheckout

• `get` **forceCheckout**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:305

___

### hasExternalDataSource

• `get` **hasExternalDataSource**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:309

___

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:209

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:185

___

### imagePath

• `get` **imagePath**(): [`SPPath`](SPPath.md)

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/list/List.ts:313

___

### imageUrl

• `get` **imageUrl**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:317

___

### irmEnabled

• `get` **irmEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:329

___

### irmExpire

• `get` **irmExpire**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:333

___

### irmReject

• `get` **irmReject**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:337

___

### isApplicationList

• `get` **isApplicationList**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:341

___

### isCatalog

• `get` **isCatalog**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:345

___

### isPrivate

• `get` **isPrivate**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:213

___

### itemCount

• `get` **itemCount**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:193

___

### lastItemDeletedDate

• `get` **lastItemDeletedDate**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:349

___

### lastItemModifiedDate

• `get` **lastItemModifiedDate**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:353

___

### lastItemUserModifiedDate

• `get` **lastItemUserModifiedDate**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:357

___

### listExperienceOptions

• `get` **listExperienceOptions**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:361

___

### listItemEntityTypeFullName

• `get` **listItemEntityTypeFullName**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:189

___

### majorVersionLimit

• `get` **majorVersionLimit**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:365

___

### majorWithMinorVersionsLimit

• `get` **majorWithMinorVersionsLimit**(): `number`

#### Returns

`number`

#### Defined in

src/list/List.ts:369

___

### multipleDataList

• `get` **multipleDataList**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:373

___

### noCrawl

• `get` **noCrawl**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:377

___

### parentWebPath

• `get` **parentWebPath**(): [`SPPath`](SPPath.md)

#### Returns

[`SPPath`](SPPath.md)

#### Defined in

src/list/List.ts:381

___

### parentWebUrl

• `get` **parentWebUrl**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:385

___

### parserDisabled

• `get` **parserDisabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:389

___

### sensitivityLabelToEncryptOnDownloadForLibrary

• `get` **sensitivityLabelToEncryptOnDownloadForLibrary**(): ``null``

#### Returns

``null``

#### Defined in

src/list/List.ts:325

___

### serverTemplateCanCreateFolders

• `get` **serverTemplateCanCreateFolders**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/list/List.ts:393

___

### site

• `get` **site**(): [`Site`](Site.md)

#### Returns

[`Site`](Site.md)

#### Inherited from

AbstractList.site

#### Defined in

src/list/AbstractList.ts:31

___

### templateFeatureId

• `get` **templateFeatureId**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:397

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:197

## Methods

### createChangeToken

▸ **createChangeToken**(`changeTime?`): [`ChangeToken`](ChangeToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeTime?` | `Date` |

#### Returns

[`ChangeToken`](ChangeToken.md)

#### Defined in

src/list/List.ts:469

___

### deleteRequest

▸ **deleteRequest**\<`T`\>(`url`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractList](AbstractList.md).[deleteRequest](AbstractList.md#deleterequest)

#### Defined in

src/RequestSender.ts:75

___

### dontThrowFor

▸ **dontThrowFor**(): [`ErrorKind`](../enums/ErrorKind.md)[]

#### Returns

[`ErrorKind`](../enums/ErrorKind.md)[]

#### Inherited from

[AbstractList](AbstractList.md).[dontThrowFor](AbstractList.md#dontthrowfor)

#### Defined in

src/list/AbstractList.ts:18

___

### get

▸ **get**(): `Promise`\<[`List`](List.md)\>

#### Returns

`Promise`\<[`List`](List.md)\>

#### Overrides

[AbstractList](AbstractList.md).[get](AbstractList.md#get)

#### Defined in

src/list/List.ts:465

___

### getAuth

▸ **getAuth**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AbstractList](AbstractList.md).[getAuth](AbstractList.md#getauth)

#### Defined in

src/list/AbstractList.ts:22

___

### getChanges

▸ **getChanges**(`changeTypes?`, `since?`): `Promise`\<[`ChangeList`](ChangeList.md)\<[`List`](List.md)\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `changeTypes` | [`ChangeQueryType`](../enums/ChangeQueryType.md)[] | `ALL_CHANGE_TYPES` |
| `since?` | [`ChangeToken`](ChangeToken.md) | `undefined` |

#### Returns

`Promise`\<[`ChangeList`](ChangeList.md)\<[`List`](List.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getChanges](AbstractList.md#getchanges)

#### Defined in

src/list/AbstractList.ts:47

___

### getItemById

▸ **getItemById**(`id`): `Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItem`](ListItem.md)\<[`List`](List.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemById](AbstractList.md#getitembyid)

#### Defined in

src/list/AbstractList.ts:39

___

### getItemByIdWithFileOrFolder

▸ **getItemByIdWithFileOrFolder**(`id`): `Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`List`](List.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`ListItemWithFileOrFolder`](../interfaces/ListItemWithFileOrFolder.md)\<[`List`](List.md)\>\>

#### Inherited from

[AbstractList](AbstractList.md).[getItemByIdWithFileOrFolder](AbstractList.md#getitembyidwithfileorfolder)

#### Defined in

src/list/AbstractList.ts:43

___

### getPartialItemById

▸ **getPartialItemById**(`id`): [`PartialListItemById`](PartialListItemById.md)\<[`List`](List.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`PartialListItemById`](PartialListItemById.md)\<[`List`](List.md)\>

#### Inherited from

[AbstractList](AbstractList.md).[getPartialItemById](AbstractList.md#getpartialitembyid)

#### Defined in

src/list/AbstractList.ts:35

___

### getRequest

▸ **getRequest**\<`T`\>(`url`, `config?`): `Promise`\<`T`\>

Performs a GET request to the specified url

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | The type of the response |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url to perform the request to |
| `config?` | `AxiosRequestConfig`\<`any`\> | The config for the request |

#### Returns

`Promise`\<`T`\>

The response data, null if sharepoint says its null, or undefined if an error occurred and was handled.

#### Inherited from

[AbstractList](AbstractList.md).[getRequest](AbstractList.md#getrequest)

#### Defined in

src/RequestSender.ts:59

___

### getSubscriptions

▸ **getSubscriptions**(): `Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`List`](List.md)\>[]\>

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<[`List`](List.md)\>[]\>

#### Inherited from

[AbstractList](AbstractList.md).[getSubscriptions](AbstractList.md#getsubscriptions)

#### Defined in

src/list/AbstractList.ts:65

___

### patchRequest

▸ **patchRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractList](AbstractList.md).[patchRequest](AbstractList.md#patchrequest)

#### Defined in

src/RequestSender.ts:71

___

### postRequest

▸ **postRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractList](AbstractList.md).[postRequest](AbstractList.md#postrequest)

#### Defined in

src/RequestSender.ts:63

___

### putRequest

▸ **putRequest**\<`T`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`\<`D`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[AbstractList](AbstractList.md).[putRequest](AbstractList.md#putrequest)

#### Defined in

src/RequestSender.ts:67

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `allowContentTypes` | `boolean` |
| `baseTemplate` | `number` |
| `baseType` | `number` |
| `contentTypesEnabled` | `boolean` |
| `crawlNonDefaultViews` | `boolean` |
| `created` | `Date` |
| `currentChangeToken` | [`ChangeToken`](ChangeToken.md) |
| `defaultContentApprovalWorkflowId` | `string` |
| `defaultItemOpenUseListSetting` | `boolean` |
| `defaultSensitivityLabelForLibrary` | `string` |
| `description` | `string` |
| `direction` | `string` |
| `disableCommenting` | `boolean` |
| `disableGridEditing` | `boolean` |
| `documentTemplateUrl` | `string` |
| `draftVersionVisibility` | `number` |
| `enableAttachments` | `boolean` |
| `enableFolderCreation` | `boolean` |
| `enableMinorVersion` | `boolean` |
| `enableModeration` | `boolean` |
| `enableRequestSignOff` | `boolean` |
| `enableVersioning` | `boolean` |
| `entityTypeName` | `string` |
| `exemptFromBlockDownloadOfNonViewableFiles` | `boolean` |
| `fileSavePostProcessingEnabled` | `boolean` |
| `forceCheckout` | `boolean` |
| `hasExternalDataSource` | `boolean` |
| `hidden` | `boolean` |
| `id` | `string` |
| `imagePath` | [`SPPath`](SPPath.md) |
| `imageUrl` | `string` |
| `irmEnabled` | `boolean` |
| `irmExpire` | `boolean` |
| `irmReject` | `boolean` |
| `isApplicationList` | `boolean` |
| `isCatalog` | `boolean` |
| `isPrivate` | `boolean` |
| `itemCount` | `number` |
| `lastItemDeletedDate` | `string` |
| `lastItemModifiedDate` | `string` |
| `lastItemUserModifiedDate` | `string` |
| `listExperienceOptions` | `number` |
| `listItemEntityTypeFullName` | `string` |
| `majorVersionLimit` | `number` |
| `majorWithMinorVersionsLimit` | `number` |
| `multipleDataList` | `boolean` |
| `noCrawl` | `boolean` |
| `parentWebPath` | [`SPPath`](SPPath.md) |
| `parentWebUrl` | `string` |
| `parserDisabled` | `boolean` |
| `sensitivityLabelToEncryptOnDownloadForLibrary` | ``null`` |
| `serverTemplateCanCreateFolders` | `boolean` |
| `templateFeatureId` | `string` |
| `title` | `string` |

#### Overrides

[AbstractList](AbstractList.md).[toJSON](AbstractList.md#tojson)

#### Defined in

src/list/List.ts:405

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

src/list/List.ts:401

___

### FromResponse

▸ **FromResponse**(`site`, `response`): [`List`](List.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `site` | [`Site`](Site.md) |
| `response` | [`ListResponse`](../interfaces/ListResponse.md) |

#### Returns

[`List`](List.md)

#### Defined in

src/list/List.ts:125
