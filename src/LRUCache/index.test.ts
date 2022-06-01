import { Test } from "@anderjason/tests";
import { LRUCache } from ".";

Test.define("LRUCache can be created", () => {
  const cache = new LRUCache(10);
  Test.assertIsEqual(10, cache.capacity, "capacity is 10");
});

Test.define("LRUCache can be used", () => {
  const cache = new LRUCache<string>(4);
  Test.assertIsEqual(0, cache.count, "count is 0");
  Test.assert(!cache.has("a"), "cache does not have 'a'");

  cache.set("a", "1");
  cache.set("b", "2");
  Test.assertIsEqual(2, cache.count, "count is 2");
  Test.assert(cache.has("a"), "cache has 'a'");
  Test.assert(cache.has("b"), "cache has 'b'");

  cache.set("c", "3");
  cache.set("d", "4");
  Test.assertIsEqual(4, cache.count, "count is 4");
  Test.assert(cache.has("c"), "cache has 'c'");
  Test.assert(cache.has("d"), "cache has 'd'");

  cache.set("e", "5");
  Test.assert(cache.has("e"), "cache has 'e'");
  Test.assert(!cache.has("a"), "cache does not have 'a'");
  Test.assertIsEqual(4, cache.count, "count is 4");

  cache.delete("e");
  Test.assert(!cache.has("e"), "cache does not have 'e'");
  Test.assertIsEqual(3, cache.count, "count is 3");
});
