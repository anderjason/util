import { Test } from "@anderjason/tests";
import { numberWithRangeMap } from "./numberWithRangeMap";

Test.define(
  "numberWithRangeMap adjusts a number from the input range to the corresponding point in the output range",
  () => {
    const input = 5;

    Test.assert(numberWithRangeMap(input, 0, 10, 0, 100) === 50, "Result 1 should be correct");
    Test.assert(numberWithRangeMap(input, 0, 5, 0, 100) === 100, "Result 2 should be correct");
  }
);

Test.define(
  "numberWithRangeMap clips values to the input range before scaling",
  () => {
    const input = 5;

    Test.assert(numberWithRangeMap(input, 0, 1, 0, 100) === 100, "Result 1 should be correct");
    Test.assert(numberWithRangeMap(input, 10, 100, 0, 100) === 0, "Result 2 should be correct");
  }
);
