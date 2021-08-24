import { Test } from "@anderjason/tests";
import { hashCodeGivenString } from "./hashCodeGivenString";

Test.define(
  "hashCodeGivenString should return the same number if called with the same input",
  () => {  
    const expected = 3259054761512980;
    const actual = hashCodeGivenString("hello world");

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "hashCodeGivenString should return a different number if called with different input",
  () => {  
    const expected = 2029131704025977;
    const actual = hashCodeGivenString("abcdef");

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "hashCodeGivenString should return the same number if called multiple times with the same input",
  () => {  
    const a = hashCodeGivenString("abcdef");
    const b = hashCodeGivenString("abcdef");
    
    Test.assertIsEqual(a, b);
  }
);

Test.define(
  "hashCodeGivenString should return the different numbers if called multiple times with the same input and different seeds",
  () => {  
    const a = hashCodeGivenString("abcdef", 1);
    const b = hashCodeGivenString("abcdef", 2);
    
    Test.assert(a !== b);
  }
);


Test.define(
  "hashCodeGivenString should return different numbers if called multiple times without a seed",
  () => {  
    const a = hashCodeGivenString("abcdef");
    const b = hashCodeGivenString("abcde");
    
    Test.assert(a !== b);
  }
);

Test.define(
  "hashCodeGivenString should support empty strings",
  () => {  
    const expected = 3338908027751811;
    const actual = hashCodeGivenString("");

    Test.assertIsEqual(actual, expected);
  }
);

Test.define(
  "hashCodeGivenString should throw when passed null or undefined",
  () => {  
    Test.assertThrows(() => {
      hashCodeGivenString(null);
    })
    
    Test.assertThrows(() => {
      hashCodeGivenString(undefined);
    })
  }
);
