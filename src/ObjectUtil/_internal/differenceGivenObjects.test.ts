import { Test } from "@anderjason/tests";
import { differenceGivenObjects } from "./differenceGivenObjects";

Test.define("diffGivenObjects returns the expected result", () => {
  const first: any = {
    a: 1,
    b: {
      message: "hello world",
      color: "red",
      numbers: [1,2,3]
    },
    c: 3,
    d: 4
  };

  const second: any = {
    a: 1,
    b: {
      message: "another",
      numbers: [2,4],
      color: "blue",
      size: "large"
    },
    d: undefined,
    e: 4
  };

  const actual = differenceGivenObjects(first, second);
  for (const change of actual) {
    if (change.type === "set") {
      console.log(`${change.valuePath.toString()}: SET ${change.newValue}`);
    } else {
      console.log(`${change.valuePath.toString()}: DELETE`);
    }
  }
});