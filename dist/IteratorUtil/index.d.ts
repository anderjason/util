import { arrayGivenAsyncIterable } from "./_internal/arrayGivenAsyncIterable";
import { asyncIterableGivenCallback } from "./_internal/asyncIterableGivenCallback";
import { asyncIterableWithFilter } from "./_internal/asyncIterableWithFilter";
import { countGivenAsyncIterable } from "./_internal/countGivenAsyncIterable";
import { optionalLastValueGivenAsyncIterable } from "./_internal/optionalLastValueGivenAsyncIterable";
import { optionalNthValueGivenAsyncIterable } from "./_internal/optionalNthValueGivenAsyncIterable";
export declare class IterableUtil {
    static arrayGivenAsyncIterable: typeof arrayGivenAsyncIterable;
    static countGivenAsyncIterable: typeof countGivenAsyncIterable;
    static optionalNthValueGivenAsyncIterable: typeof optionalNthValueGivenAsyncIterable;
    static optionalLastValueGivenAsyncIterable: typeof optionalLastValueGivenAsyncIterable;
    static asyncIterableGivenCallback: typeof asyncIterableGivenCallback;
    static asyncIterableWithFilter: typeof asyncIterableWithFilter;
}
