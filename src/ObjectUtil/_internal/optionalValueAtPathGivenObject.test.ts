import { Test } from "@anderjason/tests";
import { ValuePath } from "../../ValuePath";
import { optionalValueAtPathGivenObject } from "./optionalValueAtPathGivenObject";

Test.define(
  "optionalValueAtPathGivenObject returns the expected result",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = optionalValueAtPathGivenObject(
      original,
      ValuePath.givenString("design.colors.background")
    );
    const expected = "red";

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "optionalValueAtPathGivenObject returns the expected result with an empty path",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = optionalValueAtPathGivenObject(
      original,
      ValuePath.givenParts([])
    );

    Test.assertIsDeepEqual(actual, original);
  }
);
