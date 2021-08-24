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

Test.define("arrayWithOrderFromValue can handle undefined", () => {
  const input = [
    { player: "third", score: 5 },
    { player: "second" },
    { player: "first", score: 1 },
    { player: "fourth", score: 8 },
    { player: "fifth", score: 12 },
  ];

  const result = arrayWithOrderFromValue(
    input,
    (item) => item.score,
    "descending"
  );

  const playerNames = result.map(r => r.player);
  Test.assertIsDeepEqual(playerNames, ["fifth", "fourth", "third", "first", "second"]);

  const result2 = arrayWithOrderFromValue(
    input,
    (item) => item.score,
    "ascending"
  );

  const playerNames2 = result2.map(r => r.player);
  Test.assertIsDeepEqual(playerNames2, ["second", "first", "third", "fourth", "fifth"]);
});

Test.define("arrayWithOrderFromValue can handle natural sorting", () => {
  const input = [
    { name: "alice100" },
    { name: "alice1" },
    { name: "bob1" },
    { name: "alice10" },
    { name: "alice3" },
    { name: "bob2" },
    { name: "bob100" },
    { name: "bob12" },
    { name: "alice15" },
    { name: "alice2" },
  ];

  const result = arrayWithOrderFromValue(
    input,
    (item) => item.name,
    "ascending"
  );

  const names = result.map(r => r.name);
  Test.assertIsDeepEqual(names, ["alice1", "alice2", "alice3", "alice10", "alice15", "alice100", "bob1", "bob2", "bob12", "bob100"]);

  const result2 = arrayWithOrderFromValue(
    input,
    (item) => item.name,
    "descending"
  );

  const names2 = result2.map(r => r.name);
  Test.assertIsDeepEqual(names2, ["bob100", "bob12", "bob2", "bob1", "alice100", "alice15", "alice10", "alice3", "alice2", "alice1"]);
});
