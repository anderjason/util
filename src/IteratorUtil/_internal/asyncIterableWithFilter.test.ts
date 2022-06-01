import { Test } from "@anderjason/tests";
import { asyncIterableGivenCallback } from "./asyncIterableGivenCallback";
import { asyncIterableWithFilter } from "./asyncIterableWithFilter";

Test.define("asyncIterableWithFilter can be used", async () => {
  const original = asyncIterableGivenCallback(async (i) => {
    return {
      value: i,
      isDone: i == 8,
    };
  });

  const even = asyncIterableWithFilter(original(), async (n) => {
    return n % 2 === 0;
  });

  const result: number[] = [];
  for await (const n of even()) {
    result.push(n);
  }

  Test.assertIsDeepEqual(result, [0, 2, 4, 6, 8], "result is [0, 2, 4, 6, 8]");
});
