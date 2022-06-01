import { Test } from "@anderjason/tests";
import { booleanGivenBooleanLike } from "./booleanGivenBooleanLike";

Test.define("booleanGivenBooleanLike returns the expected result", async () => {
  Test.assert(booleanGivenBooleanLike(true) === true, "Result 1 should be correct");
  Test.assert(booleanGivenBooleanLike("true") === true, "Result 2 should be correct");
  Test.assert(booleanGivenBooleanLike("TRUE") === true, "Result 3 should be correct");
  Test.assert(booleanGivenBooleanLike("True") === true, "Result 4 should be correct");

  Test.assert(booleanGivenBooleanLike(false) === false, "Result 5 should be correct");
  Test.assert(booleanGivenBooleanLike("false") === false, "Result 6 should be correct");
  Test.assert(booleanGivenBooleanLike("FALSE") === false, "Result 7 should be correct");
  Test.assert(booleanGivenBooleanLike("False") === false, "Result 8 should be correct");

  Test.assert(booleanGivenBooleanLike("word") === false, "Result 9 should be correct");
  Test.assert(booleanGivenBooleanLike("") === false, "Result 10 should be correct");

  Test.assert(booleanGivenBooleanLike(undefined) === undefined, "Result 11 should be correct");
  Test.assert(booleanGivenBooleanLike(null) === undefined, "Result 12 should be correct");

  await Test.assertThrows(() => {
    booleanGivenBooleanLike(1);
  }, "Result 13 should throw");
});
