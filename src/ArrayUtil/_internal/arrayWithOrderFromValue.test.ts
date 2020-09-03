import { Test } from "@anderjason/tests";
import { arrayWithOrderFromValue } from "./arrayWithOrderFromValue";

Test.define(
  "arrayWithOrderFromValue returns an array sorted by the result of a function called on each item",
  () => {
    const input = [
      { player: "third", score: 5 },
      { player: "second", score: 3 },
      { player: "first", score: 1 },
    ];

    const result = arrayWithOrderFromValue(
      input,
      (item) => item.score,
      "ascending"
    );

    Test.assert(result[0].player === "first");
    Test.assert(result[1].player === "second");
    Test.assert(result[2].player === "third");
  }
);

Test.define("arrayWithOrderFromValue can return descending results", () => {
  const input = [
    { player: "third", score: 5 },
    { player: "second", score: 3 },
    { player: "first", score: 1 },
  ];

  const result = arrayWithOrderFromValue(
    input,
    (item) => item.score,
    "descending"
  );

  Test.assert(result[0].player === "third");
  Test.assert(result[1].player === "second");
  Test.assert(result[2].player === "first");
});

Test.define("arrayWithOrderFromValue handles an empty array", () => {
  const input: any[] = [];
  const result = arrayWithOrderFromValue(input, (x) => 1, "ascending");

  Test.assert(result != null);
  Test.assert(result.length === 0);
});
