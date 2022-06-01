import { Test } from "@anderjason/tests";
import { stringOfRandomCharacters } from "./stringOfRandomCharacters";

Test.define(
  "stringOfRandomCharacters returns a string with the specified length",
  () => {
    const str = stringOfRandomCharacters(5);
    Test.assert(str.length === 5, "Result should have 5 characters");
  }
);

Test.define(
  "stringOfRandomCharacters returns a different string each time",
  () => {
    const str1 = stringOfRandomCharacters(5);
    const str2 = stringOfRandomCharacters(5);
    const str3 = stringOfRandomCharacters(5);

    Test.assert(str1 !== str2, "Result 1 should not be the same");
    Test.assert(str1 !== str3, "Result 2 should not be the same");
    Test.assert(str2 !== str3, "Result 3 should not be the same");
  }
);
