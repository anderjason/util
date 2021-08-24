import { Test } from "@anderjason/tests";
import { randomNumberGivenRange } from "./randomNumberGivenRange";

Test.define(
  "randomNumberGivenRange should return the same number if called with the same seed",
  () => {  
    const expected = 127.13819111231714;
    const actual = randomNumberGivenRange(100, 200, 12345);

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "randomNumberGivenRange should return a different number if called with a different seed",
  () => {  
    const expected = 154.30810952093452;
    const actual = randomNumberGivenRange(100, 200, 12344);

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "randomNumberGivenRange should return the same number if called multiple times with the same seed",
  () => {  
    const a = randomNumberGivenRange(100, 200, 12345);
    const b = randomNumberGivenRange(100, 200, 12345);
    
    Test.assertIsEqual(a, b);
  }
);

Test.define(
  "randomNumberGivenRange should return different numbers if called multiple times without a seed",
  () => {  
    const a = randomNumberGivenRange(100, 200);
    const b = randomNumberGivenRange(100, 200);
    
    Test.assert(a !== b);
  }
);
