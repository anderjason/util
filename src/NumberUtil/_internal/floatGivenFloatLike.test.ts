import { Test } from "@anderjason/tests";
import { floatGivenFloatLike } from "./floatGivenFloatLike";

Test.define("floatGivenFloatLike returns the expected result", async () => {
  Test.assert(floatGivenFloatLike(5.5) === 5.5);
  Test.assert(floatGivenFloatLike(5) === 5);
  Test.assert(floatGivenFloatLike("5.5") == 5.5);
  Test.assert(floatGivenFloatLike("5") == 5);
  await Test.assertThrows(() => {
    floatGivenFloatLike("abc");
  });
  await Test.assertThrows(() => {
    floatGivenFloatLike(undefined);
  });
});
