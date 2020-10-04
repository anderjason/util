import { Test } from "@anderjason/tests";
import "./ArrayUtil/index.test";
import "./NumberUtil/index.test";
import "./Percent/index.test";
import "./PromiseUtil/index.test";
import "./StringUtil/index.test";

Test.runAll()
  .then(() => {
    console.log("Tests complete");
  })
  .catch((err) => {
    console.error(err);
    console.error("Tests failed");
  });
