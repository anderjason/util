import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";
import { arrayGivenAsyncIterable } from "./arrayGivenAsyncIterable";

Test.define("arrayGivenAsyncIterable can be used", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 3,
    };
  });

  const result = await arrayGivenAsyncIterable(original());
  Test.assertIsDeepEqual(result, [0, 1, 2, 3], "result is [0, 1, 2, 3]");
});

Test.define("arrayGivenAsyncIterable supports a limit", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 3,
    };
  });

  const result = await arrayGivenAsyncIterable(original(), 2); // limit 2 elements
  Test.assertIsDeepEqual(result, [0, 1], "result is [0, 1]");
});
