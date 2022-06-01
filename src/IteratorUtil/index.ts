import { arrayGivenAsyncIterable } from "./_internal/arrayGivenAsyncIterable";
import { asyncIterableGivenCallback } from "./_internal/asyncIterableGivenCallback";
import { asyncIterableWithFilter } from "./_internal/asyncIterableWithFilter";
import { countGivenAsyncIterable } from "./_internal/countGivenAsyncIterable";
import { optionalLastValueGivenAsyncIterable } from "./_internal/optionalLastValueGivenAsyncIterable";
import { optionalNthValueGivenAsyncIterable } from "./_internal/optionalNthValueGivenAsyncIterable";

export class IterableUtil {
  static arrayGivenAsyncIterable = arrayGivenAsyncIterable;
  static countGivenAsyncIterable = countGivenAsyncIterable;
  static optionalNthValueGivenAsyncIterable =
    optionalNthValueGivenAsyncIterable;
  static optionalLastValueGivenAsyncIterable =
    optionalLastValueGivenAsyncIterable;
  static asyncIterableGivenCallback = asyncIterableGivenCallback;
  static asyncIterableWithFilter = asyncIterableWithFilter;
}
