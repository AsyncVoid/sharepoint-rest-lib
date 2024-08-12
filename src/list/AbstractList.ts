import {ListItem, PartialListItemById} from "./ListItem.js";
import {List} from "./List.js";
import {RequestSender} from "../RequestSender.js";
import {Site} from "../Site.js";
import {ErrorKind} from "../SPError.js";
import {ALL_CHANGE_TYPES, ChangeList, ChangeQueryType, ChangeToken} from "../change/index.js";
import {ChangeListResponse} from "../change/ChangeListResponse.js";
import {WebhookSubscription, WebhookSubscriptionResponse} from "../webhook/index.js";
import {ListResponse} from "./ListResponse.js";
import {ListItemWithFileOrFolder} from "./ListItemWithFileOrFolder.js";

export abstract class AbstractList extends RequestSender {
    protected readonly _site: Site;

    protected constructor(site: Site) {
        super();
        this._site = site;
    }

    protected dontThrowFor(): ErrorKind[] {
        return [];
    }

    getAuth(): Promise<string> {
        return this._site.getAuth();
    }

    async get(): Promise<List> {
        const response = await this.getRequest<ListResponse>("");
        return List.FromResponse(this._site, response);
    }

    get site(): Site {
        return this._site;
    }

    getPartialItemById(id: number): PartialListItemById<this> {
        return new PartialListItemById(this, id);
    }

    async getItemById(id: number): Promise<ListItem<this> | undefined> {
        return await new PartialListItemById(this, id).get();
    }

    async getItemByIdWithFileOrFolder(id: number): Promise<ListItemWithFileOrFolder<this>> {
        return await new PartialListItemById(this, id).getWithFileOrFolder();
    }

    async getChanges(changeTypes: ChangeQueryType[] = ALL_CHANGE_TYPES,
                     since?: ChangeToken): Promise<ChangeList<this>> {
        const changeTypesObject = changeTypes.reduce((acc, changeType) => {
            acc[ChangeQueryType[changeType]] = "True";
            return acc;
        }, {});
        const data = await this.postRequest<ChangeListResponse>(
            "GetChanges",
            {
                query: {
                    ...changeTypesObject,
                    ChangeTokenStart: since && since.toSendable()
                },
            },
        );
        return ChangeList.FromResponse(this, data);
    }

    async getSubscriptions(): Promise<WebhookSubscription<this>[]> {
        const data = await this.getRequest<{value: WebhookSubscriptionResponse[]}>("subscriptions");
        return Promise.all(data.value.map(sub => WebhookSubscription.FromResponse<this>(this, sub)));
    }

    toJSON(): object {
        return {
            site: this._site,
        }
    }
}
