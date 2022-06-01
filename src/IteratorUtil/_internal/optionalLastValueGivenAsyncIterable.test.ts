import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";
import { optionalLastValueGivenAsyncIterable } from "./optionalLastValueGivenAsyncIterable";

Test.define("countGivenAsyncIterable can be used", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 8,
    };
  });

  const value = await optionalLastValueGivenAsyncIterable(original());

  Test.assertIsEqual(value, 8, "value is 8");
});
