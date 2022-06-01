import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";
import { optionalNthValueGivenAsyncIterable } from "./optionalNthValueGivenAsyncIterable";

Test.define("optionalNthValueGivenAsyncIterable can be used", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 8,
    };
  });

  const value = await optionalNthValueGivenAsyncIterable(original(), 1);
  const second = await optionalNthValueGivenAsyncIterable(original(), 3);
  const missing = await optionalNthValueGivenAsyncIterable(original(), 100);

  Test.assertIsEqual(value, 1, "value is 1");
  Test.assertIsEqual(second, 3, "second is 3");
  Test.assert(missing == null, "missing is null");
});
