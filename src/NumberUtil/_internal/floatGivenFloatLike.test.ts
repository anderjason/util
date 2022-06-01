import { Test } from "@anderjason/tests";
import { floatGivenFloatLike } from "./floatGivenFloatLike";

Test.define("floatGivenFloatLike returns the expected result", async () => {
  Test.assert(floatGivenFloatLike(5.5) === 5.5, "Result 1 should be correct");
  Test.assert(floatGivenFloatLike(5) === 5, "Result 2 should be correct");
  Test.assert(floatGivenFloatLike("5.5") == 5.5, "Result 3 should be correct");
  Test.assert(floatGivenFloatLike("5") == 5, "Result 4 should be correct");

  await Test.assertThrows(() => {
    floatGivenFloatLike("abc");
  }, "Result 5 should throw");

  await Test.assertThrows(() => {
    floatGivenFloatLike(undefined);
  }, "Result 6 should throw");
});
