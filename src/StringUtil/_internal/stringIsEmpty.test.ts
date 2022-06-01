import { Test } from "@anderjason/tests";
import { stringIsEmpty } from "./stringIsEmpty";

Test.define("stringIsEmpty returns true for null input", () => {
  Test.assert(stringIsEmpty(null) === true, "Result should be correct");
});

Test.define("stringIsEmpty returns true for an empty string", () => {
  Test.assert(stringIsEmpty("") === true, "Result should be correct");
});

Test.define(
  "stringIsEmpty returns false for a string with only whitespace",
  () => {
    Test.assert(stringIsEmpty(" ") === false, "Result should be correct");
  }
);

Test.define("stringIsEmpty returns false for a string with characters", () => {
  Test.assert(stringIsEmpty("abc") === false, "Result should be correct");
});
