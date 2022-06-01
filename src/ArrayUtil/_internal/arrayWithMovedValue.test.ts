import { Test } from "@anderjason/tests";
import { arrayWithMovedValue } from "./arrayWithMovedValue";

Test.define(
  "arrayWithMovedValue returns an empty array if input is null or empty",
  () => {
    Test.assert(
      arrayWithMovedValue(null, 0, 0) != null,
      "Result 1 should not be null"
    );
    Test.assert(
      arrayWithMovedValue(undefined, 0, 0) != null,
      "Result 2 should not be null"
    );
    Test.assert(
      arrayWithMovedValue([], 0, 0) != null,
      "Result 3 should not be null"
    );
  }
);

Test.define("arrayWithMovedValue can move items", () => {
  const input = ["a", "b", "c", "d", "e"];
  const expected = ["b", "c", "a", "d", "e"];

  const actual = arrayWithMovedValue(input, 0, 2);
  Test.assertIsDeepEqual(actual, expected, "Result should be correct");
});

Test.define("arrayWithMovedValue can move items past the end", () => {
  const input = ["a", "b", "c", "d", "e"];
  const expected = ["b", "c", "d", "e", undefined, undefined, "a"];

  const actual = arrayWithMovedValue(input, 0, 6);
  Test.assertIsDeepEqual(actual, expected, "Result should be correct");
});

Test.define("arrayWithMovedValue can move items backward from the end", () => {
  const input = ["a", "b", "c", "d", "e"];
  const expected = ["b", "c", "d", "e", "a"];

  const actual = arrayWithMovedValue(input, 0, -1);
  Test.assertIsDeepEqual(actual, expected, "Result should be correct");
});

Test.define(
  "arrayWithMovedValue returns a new array even if nothing changes",
  () => {
    const input = ["a", "b", "c", "d", "e"];
    const expected = ["a", "b", "c", "d", "e"];

    const actual = arrayWithMovedValue(input, 1, 1);

    Test.assertIsDeepEqual(actual, expected, "Result should be correct");
    Test.assert(actual !== expected, "Result should be a new array");
  }
);

Test.define(
  "arrayWithMovedValue supports moving from an index that doesn't exist",
  () => {
    const input = ["a", "b", "c"];
    const expected = ["a", undefined, "b", "c"];

    const actual = arrayWithMovedValue(input, 5, 1);

    Test.assertIsDeepEqual(actual, expected, "Result should be correct");
  }
);
