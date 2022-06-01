import { Test } from "@anderjason/tests";
import { optionalRandomValueGivenArray } from "./optionalRandomValueGivenArray";

Test.define(
  "optionalRandomItemGivenArray returns a random item from the array",
  () => {
    const first = "first";
    const second = "second";
    const third = "third";

    const items = [first, second, third];
    const result = optionalRandomValueGivenArray(items);

    Test.assert(result != null, "Result should not be null");
    Test.assert(
      result === first || result === second || result === third,
      "Result should be one of the items"
    );
  }
);

Test.define(
  "optionalRandomValueGivenArray returns undefined if the array is empty",
  () => {
    const items: any[] = [];
    const result = optionalRandomValueGivenArray(items);

    Test.assert(typeof result === "undefined", "Result should be undefined");
  }
);
