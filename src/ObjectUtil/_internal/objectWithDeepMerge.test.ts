import { Test } from "@anderjason/tests";
import { objectWithDeepMerge } from "./objectWithDeepMerge";

Test.define("objectWithDeepMerge returns the expected result", () => {
  const colors: any = {
    background: "red",
    foreground: "blue",
  };

  const original = {
    design: {
      options: [
        {
          settings: {
            colors,
          },
        },
      ],
    },
  };

  const copy = objectWithDeepMerge({}, original);
  colors.other = "green";

  Test.assert(copy.design.options[0].settings.colors.background === "red");
  Test.assert(copy.design.options[0].settings.colors.other == null);
});
