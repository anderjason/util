import { Test } from "@anderjason/tests";
import { Percent } from ".";

Test.define("Percent can calculate its inverse", () => {
  const input = Percent.givenFraction(1, 2); // 0.5

  const actual = input.withInverse();
  const expected = Percent.givenFraction(2, 1); // 2

  Test.assert(actual.isEqual(expected));
});
