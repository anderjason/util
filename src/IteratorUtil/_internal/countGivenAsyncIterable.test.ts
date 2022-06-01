import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";
import { countGivenAsyncIterable } from "./countGivenAsyncIterable";

Test.define("countGivenAsyncIterable can be used", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 8,
    };
  });

  const count = await countGivenAsyncIterable(original());
  Test.assertIsEqual(count, 9, "count is 9");
});
