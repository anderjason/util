import { Test } from "@anderjason/tests";
import { arrayWithRandomOrder } from "./arrayWithRandomOrder";
import { objectIsDeepEqual } from "../../ObjectUtil/_internal/objectIsDeepEqual";

Test.define("arrayWithRandomOrder returns a new shuffled array", () => {
  const input = [1, 2, 3, 4, 5];
  const result = arrayWithRandomOrder(input);

  Test.assert(result.length === 5, "Result should have 5 items");
  Test.assert(result !== input, "Result should not equal input");
});

Test.define("arrayWithRandomOrder supports a seed", () => {
  const input = [1, 2, 3, 4, 5];
  const result1 = arrayWithRandomOrder(input, 50);
  const result2 = arrayWithRandomOrder(input, 50);
  const result3 = arrayWithRandomOrder(input, 6);
  const result4 = arrayWithRandomOrder(input, 6);

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);

  Test.assertIsDeepEqual(result1, result2, "Results should be equal");
  Test.assertIsDeepEqual(result3, result4, "Results should be equal");
  Test.assert(
    !objectIsDeepEqual(result1, result3),
    "Results should not be equal"
  );
});
