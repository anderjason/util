import { Test } from "@anderjason/tests";
import { Percent } from ".";

Test.define("Percent can calculate its inverse", () => {
  const input = Percent.givenFraction(1, 2); // 0.5

  const actual = input.withInverse();
  const expected = Percent.givenFraction(2, 1); // 2

  Test.assert(actual.isEqual(expected), "Result should be correct");
});

Test.define("Percent can be created with inverse lerp", () => {
  const v = 75;
  const a = 50;
  const b = 100;

  const expected = Percent.givenFraction(0.5, 1);
  const actual = Percent.givenPositionBetween(v, a, b);

  Test.assert(expected.isEqual(actual), "Result should be correct");
});

Test.define(
  "Percent can be created with inverse lerp above upper bound",
  () => {
    const v = 125;
    const a = 50;
    const b = 100;

    const expected = Percent.givenFraction(1, 1);
    const actual = Percent.givenPositionBetween(v, a, b);

    Test.assert(expected.isEqual(actual), "Result should be correct");
  }
);

Test.define(
  "Percent can be created with inverse lerp below lower bound",
  () => {
    const v = 25;
    const a = 50;
    const b = 100;

    const expected = Percent.ofZero();
    const actual = Percent.givenPositionBetween(v, a, b);

    Test.assert(expected.isEqual(actual), "Result should be correct");
  }
);

Test.define("Percent inverse lerp checks input bounds", () => {
  Test.assertThrows(() => {
    Percent.givenPositionBetween(0, 10, 5);
  }, "Should throw 1");

  Test.assertThrows(() => {
    Percent.givenPositionBetween(0, 10, 10);
  }, "Should throw 2");
});
