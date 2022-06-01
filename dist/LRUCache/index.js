"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
class LRUCache {
    constructor(capacity) {
        this._map = new Map();
        this.has = (key) => {
            return this._map.has(key);
        };
        this.get = (key) => {
            if (!this._map.has(key)) {
                return undefined;
            }
            const value = this._map.get(key);
            // The map in this cache is ordered with the least recently used keys first.
            // Whenever a key is accessed, we'll delete it and reinsert it, causing it
            // to be placed at the end.
            this._map.delete(key);
            this._map.set(key, value);
            return value;
        };
        this.set = (key, value) => {
            if (this._map.has(key)) {
                // We want each "set" operation to cause a new insertion into the map
                // so that the newest key is at the end. If the specified key already
                // exists in the map, we'll delete it first. This will cause a new entry
                // to be added to the map at the end, instead of updating the existing value.
                this._map.delete(key);
            }
            this._map.set(key, value);
            // This cache has a limited capacity. If this set operation caused
            // us to exceed the capacity, we'll delete the oldest item in the cache.
            if (this._map.size > this.capacity) {
                // JavaScript maps preserve the insertion order, so the first key is the oldest one
                const oldestKey = this._map.keys().next().value;
                this._map.delete(oldestKey);
            }
        };
        this.delete = (key) => {
            return this._map.delete(key);
        };
        this.capacity = capacity;
    }
    get count() {
        return this._map.size;
    }
}
exports.LRUCache = LRUCache;
//# sourceMappingURL=index.js.map