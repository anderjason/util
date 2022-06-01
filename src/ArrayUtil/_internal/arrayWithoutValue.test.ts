import { Test } from "@anderjason/tests";
import { arrayWithoutValue } from "./arrayWithoutValue";

Test.define(
  "arrayWithoutValue returns a new array with the specified item removed",
  () => {
    const first = { x: 1 };
    const second = { x: 2 };
    const third = { x: 3 };
    const fourth = { x: 4 };
    const items = [first, second, third, fourth];

    const result = arrayWithoutValue(items, third);

    Test.assert(result.length === 3, "Result should have 3 items");
    Test.assert(result[0] === first, "Result 1 should be correct");
    Test.assert(result[1] === second, "Result 2 should be correct");
    Test.assert(result[2] === fourth, "Result 3 should be correct");
  }
);

Test.define(
  "arrayWithoutValue returns a new array even if the item is not found",
  () => {
    const first = { x: 1 };
    const second = { x: 2 };
    const third = { x: 3 };
    const items = [first, second];

    const result = arrayWithoutValue(items, third);

    Test.assert(result !== items, "Result should be a new array");
    Test.assert(result.length === 2, "Result should have 2 items");
  }
);

Test.define("arrayWithoutValue removes all instances of the item", () => {
  const first = { x: 1 };
  const second = { x: 2 };
  const third = { x: 3 };
  const items = [third, first, second, third];

  const result = arrayWithoutValue(items, third);

  Test.assert(result.length === 2, "Result should have 2 items");
  Test.assert(result[0] === first, "Result 1 should be correct");
  Test.assert(result[1] === second, "Result 2 should be correct");
});
