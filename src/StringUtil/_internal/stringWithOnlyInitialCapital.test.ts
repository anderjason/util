import { Test } from "@anderjason/tests";
import { stringWithOnlyInitialCapital } from "./stringWithOnlyInitialCapital";

Test.define("stringWithOnlyInitialCapital returns the expected results", () => {
  const beforeAfter = [
    ["helloWorld", "Hello world"],
    ["hello world", "Hello world"],
    ["Hello world", "Hello world"],
    ["HELLO WORLD", "Hello world"],
    ["h", "H"],
    ["", ""],
  ];

  beforeAfter.forEach((pair) => {
    const actual = stringWithOnlyInitialCapital(pair[0]);
    const expected = pair[1];

    Test.assert(actual === expected);
  });
});
