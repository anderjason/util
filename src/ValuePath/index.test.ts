import { Test } from "@anderjason/tests";
import { ValuePath } from ".";

Test.define(
  "ValuePath can be initialized",
  async () => {
    ValuePath.givenParts<string>(["test"]);
    ValuePath.givenString<number>("test");
  }
);
