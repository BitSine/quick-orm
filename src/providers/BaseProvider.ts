interface DBResponse<T> {
    key: string;
    value: T;
    schema: string;
}

interface SchemaSet<T, G> {
    (schema: string, key: string, value: G): Promise<DBResponse<T>> | DBResponse<T>;
}

class BaseSchema {
    private _set: SchemaSet<any, any>;

    public constructor(public schema: string){};

    public async set<T>(key: string, value: T): Promise<DBResponse<T>> {
        return await this._set(this.schema, key, value)
    } 
}

class BaseProvider {
    public async load(schema: string) {}
}
// make comments heres