import { Test } from "@anderjason/tests";
import { ValuePath } from "../../ValuePath";
import { objectWithoutPath } from "./objectWithoutPath";

Test.define(
  "objectWithoutPath deletes an object's internal value at a path",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = objectWithoutPath(
      original,
      ValuePath.givenString("design.colors.background")
    );

    const expected = {
      design: {
        colors: {
          foreground: "blue",
        },
      },
    };

    Test.assertIsDeepEqual(
      actual,
      expected,
      "Actual should be deep equal to expected"
    );
  }
);

Test.define(
  "objectWithoutPath deletes an object's internal value at a path 2",
  () => {
    const original = {
      design: {
        colors: {
          background: "red",
          foreground: "blue",
        },
      },
    };

    const actual = objectWithoutPath(
      original,
      ValuePath.givenString("design.colors")
    );

    const expected = {
      design: {},
    };

    Test.assertIsDeepEqual(
      actual,
      expected,
      "Actual should be deep equal to expected"
    );
  }
);

Test.define("objectWithoutPath ignores missing paths", () => {
  const original = {
    design: {
      colors: {
        background: "red",
        foreground: "blue",
      },
    },
  };

  const actual = objectWithoutPath(
    original,
    ValuePath.givenString("some.other.path")
  );

  const expected = original;

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath ignores missing paths 2", () => {
  const original = {
    design: {
      colors: {
        background: "red",
        foreground: "blue",
      },
    },
  };

  const actual = objectWithoutPath(
    original,
    ValuePath.givenString("design.colors.text")
  );

  const expected = original;

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath ignores missing paths", () => {
  const original = {
    design: {
      colors: {
        background: "red",
        foreground: "blue",
      },
    },
  };

  const actual = objectWithoutPath(
    original,
    ValuePath.givenString("design.fonts.main")
  );

  const expected = original;

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath deletes items inside arrays", () => {
  const original = {
    names: ["Apple", "Ball", "Cup"],
  };

  const actual = objectWithoutPath(original, ValuePath.givenParts(["names", 1]));

  const expected = {
    names: ["Apple", "Cup"]
  };

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath ignores items inside arrays at invalid indexes", () => {
  const original = {
    names: ["Apple", "Ball", "Cup"],
  };

  const actual = objectWithoutPath(original, ValuePath.givenParts(["names", 5]));

  const expected = {
    names: ["Apple", "Ball", "Cup"]
  };

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath deletes items inside arrays at negative indexes", () => {
  const original = {
    names: ["Apple", "Ball", "Cup"],
  };

  const actual = objectWithoutPath(original, ValuePath.givenParts(["names", -1]));

  const expected = {
    names: ["Apple", "Ball"]
  };

  console.log(actual);

  Test.assertIsDeepEqual(
    actual,
    expected,
    "Actual should be deep equal to expected"
  );
});

Test.define("objectWithoutPath deletes an object with an empty path", () => {
  const original = {
    design: {
      colors: {
        background: "red",
        foreground: "blue",
      },
    },
  };

  const actual = objectWithoutPath(original, ValuePath.ofEmpty());

  Test.assert(actual == undefined, "Actual should be undefined");
});
