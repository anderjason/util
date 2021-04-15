import { Test } from "@anderjason/tests";
import { booleanGivenBooleanLike } from "./booleanGivenBooleanLike";

Test.define("booleanGivenBooleanLike returns the expected result", async () => {
  Test.assert(booleanGivenBooleanLike(true) === true);
  Test.assert(booleanGivenBooleanLike("true") === true);
  Test.assert(booleanGivenBooleanLike("TRUE") === true);
  Test.assert(booleanGivenBooleanLike("True") === true);

  Test.assert(booleanGivenBooleanLike(false) === false);
  Test.assert(booleanGivenBooleanLike("false") === false);
  Test.assert(booleanGivenBooleanLike("FALSE") === false);
  Test.assert(booleanGivenBooleanLike("False") === false);

  Test.assert(booleanGivenBooleanLike("word") === false);
  Test.assert(booleanGivenBooleanLike("") === false);

  Test.assert(booleanGivenBooleanLike(undefined) === undefined);
  Test.assert(booleanGivenBooleanLike(null) === undefined);

  await Test.assertThrows(() => {
    booleanGivenBooleanLike(1);
  });
});
