import { Test } from "@anderjason/tests";
import { randomNumberGivenInput } from "./randomNumberGivenInput";

Test.define(
  "randomNumberGivenInput should return the same number if called with the same seed",
  () => {  
    const expected = 0.27138191112317145;
    const actual = randomNumberGivenInput(12345);
    
    Test.assertIsEqual(actual, expected, "Result should be correct");
  }
);

Test.define(
  "randomNumberGivenInput should return a different number if called with a different seed",
  () => {  
    const expected = 0.5430810952093452;
    const actual = randomNumberGivenInput(12344);

    Test.assertIsEqual(actual, expected, "Result should be correct");
  }
);

Test.define(
  "randomNumberGivenSeed should return the same number if called multiple times",
  () => {  
    const a = randomNumberGivenInput(12345);
    const b = randomNumberGivenInput(12345);
    
    Test.assertIsEqual(a, b, "Result should be correct");
  }
);

Test.define(
  "randomNumberGivenSeed should throw if passed null or undefined",
  () => {  
    Test.assertThrows(() => {
      randomNumberGivenInput(null)
    }, "Result 1 should throw");

    Test.assertThrows(() => {
      randomNumberGivenInput(undefined)
    }, "Result 2 should throw");
  }
);
