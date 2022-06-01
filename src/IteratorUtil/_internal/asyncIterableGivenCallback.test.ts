import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";

Test.define("asyncIterableGivenCallback can be used", async () => {
  const iterable = asyncIterableGivenCallback<number>(async (i) => {
    return {
      value: i,
      isDone: i == 2,
    };
  });

  const result: number[] = [];
  for await (const n of iterable()) {
    result.push(n);
  }

  Test.assertIsDeepEqual(result, [0, 1, 2], "result is [0, 1, 2]");
});
