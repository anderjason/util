export declare function asyncIterableWithFilter<T>(asyncIterable: AsyncIterable<T>, filter: (value: T) => boolean | Promise<boolean>): () => AsyncGenerator<T>;
