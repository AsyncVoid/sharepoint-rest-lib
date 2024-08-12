import { keys } from 'ts-transformer-keys';

type KeyOf<T> = keyof T;

export class QueryHelper<T extends object, Selection extends KeyOf<T> = never> {
    private readonly keys: Selection[];

    constructor(keys: Selection[] = []) {
        this.keys = keys;
    }

    select<K extends KeyOf<T>>(key: K): QueryHelper<T, Selection | K> {
        return new QueryHelper<T, Selection | K>([...this.keys, key]);
    }

    selectAll(allKeys = keys<T>()): QueryHelper<T, KeyOf<T>> {
        return new QueryHelper<T, KeyOf<T>>(allKeys);
    }

    async execute(): Promise<Pick<T, Selection>> {
        // Implementation of the REST request or other logic to fetch data
        // For now, just returning a dummy value
        return {} as Pick<T, Selection>;
    }

    executeTest(val: T): Pick<T, Selection> {
        return this.keys.reduce((result, key) => {
            result[key] = val[key];
            return result;
        }, {} as Pick<T, Selection>);
    }
}

// const test = new QueryHelper<{ a: number, b: string, c: unknown, d: object }>()
//     .selectAll(keys<{ a: number, b: string, c: unknown, d: object }>())
//     .executeTest({ a: 1, b: "abc", c: {}, d: {e: 1} });
//
// console.log("Test:", test);
