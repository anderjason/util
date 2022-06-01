import { Test } from "@anderjason/tests";
import { stringWithEachMatchReplaced } from "./stringWithEachMatchReplaced";

Test.define(
  "stringWithEachMatchReplaced returns the expected results with a promise",
  async () => {
    const before: string = [
      `const PromiseHelper_1 = req("../../../lib/PromiseHelper");`,
      `const StringHelper_1 = req("../../../lib/StringHelper");`,
      `const Registry_1 = req("../../../lib/Registry");`,
      `const startLocalContainer_1 = req("./_internal/startLocalContainer");`,
    ].join("\n");

    const regex = /req\("(.*?)"\)/;

    const expected: string = [
      `const PromiseHelper_1 = TEST("../../../LIB/PROMISEHELPER");`,
      `const StringHelper_1 = TEST("../../../LIB/STRINGHELPER");`,
      `const Registry_1 = TEST("../../../LIB/REGISTRY");`,
      `const startLocalContainer_1 = TEST("./_INTERNAL/STARTLOCALCONTAINER");`,
    ].join("\n");

    const actual = await stringWithEachMatchReplaced(before, regex, (match) => {
      return Promise.resolve(`TEST("${match[1].toUpperCase()}")`);
    })
      
    Test.assert(actual === expected, "Result should be correct");
  }
);

Test.define(
  "stringWithEachMatchReplaced returns the expected results with a sync value",
  async () => {
    const before: string = [
      `const PromiseHelper_1 = req("../../../lib/PromiseHelper");`,
      `const StringHelper_1 = req("../../../lib/StringHelper");`,
      `const Registry_1 = req("../../../lib/Registry");`,
      `const startLocalContainer_1 = req("./_internal/startLocalContainer");`,
    ].join("\n");

    const regex = /req\("(.*?)"\)/;

    const expected: string = [
      `const PromiseHelper_1 = TEST("../../../LIB/PROMISEHELPER");`,
      `const StringHelper_1 = TEST("../../../LIB/STRINGHELPER");`,
      `const Registry_1 = TEST("../../../LIB/REGISTRY");`,
      `const startLocalContainer_1 = TEST("./_INTERNAL/STARTLOCALCONTAINER");`,
    ].join("\n");

    const actual = await stringWithEachMatchReplaced(before, regex, (match) => {
      return `TEST("${match[1].toUpperCase()}")`;
    });

    Test.assert(actual === expected, "Result should be correct");
  }
);
