export declare class LRUCache<T> {
    readonly capacity: number;
    private _map;
    get count(): number;
    constructor(capacity: number);
    has: (key: string) => boolean;
    get: (key: string) => T | undefined;
    set: (key: string, value: T) => void;
    delete: (key: string) => boolean;
}
