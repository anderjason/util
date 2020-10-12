import { Test } from "@anderjason/tests";
import { ValuePath } from "../../ValuePath";
import { objectWithValueAtPath } from "./objectWithValueAtPath";

Test.define(
  "objectWithValueAtPath updates an object's internal value at a path",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = objectWithValueAtPath(
      original,
      ValuePath.givenString("design.colors.background"),
      "green"
    );
    const expected = {
      design: {
        colors: {
          background: "green",
          foreground: "blue",
        },
      },
    };

    Test.assertIsDeepEqual(actual, expected);
  }
);

Test.define(
  "objectWithValueAtPath updates an object with an empty path",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = objectWithValueAtPath(original, ValuePath.givenParts([]), {
      message: "hello world",
    });
    const expected = {
      message: "hello world",
    };

    Test.assertIsDeepEqual(actual, expected);
  }
);
