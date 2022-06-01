import { Test } from "@anderjason/tests";
import { numberWithHardLimit } from "./numberWithHardLimit";

Test.define(
  "numberWithHardLimit limits a number to the specified range",
  () => {
    const input = 5;

    Test.assert(numberWithHardLimit(input, 1, 3) === 3, "Result 1 should be correct");
    Test.assert(numberWithHardLimit(input, 1, 10) === 5, "Result 2 should be correct");
    Test.assert(numberWithHardLimit(input, 10, 30) === 10, "Result 3 should be correct");
  }
);
