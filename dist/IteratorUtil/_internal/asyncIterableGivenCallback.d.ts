interface CallbackResult<T> {
    value: T;
    isDone: boolean;
}
export declare function asyncIterableGivenCallback<T>(fn: (i: number, previousValue?: T) => Promise<CallbackResult<T>>): () => AsyncGenerator<T>;
export {};
