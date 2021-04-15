"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncSequenceGivenCountAndCallback = void 0;
/**
 * Creates a promise that invokves a callback function the specified number of times.
 *
 * @param times - The number of times to invoke the callback
 * @param fn - A callback function
 * @returns A promise
 */
async function asyncSequenceGivenCountAndCallback(times, fn) {
    if (times < 1) {
        return;
    }
    for (let index = 0; index < times; index++) {
        await fn(index);
    }
}
exports.asyncSequenceGivenCountAndCallback = asyncSequenceGivenCountAndCallback;
//# sourceMappingURL=asyncSequenceGivenCountAndCallback.js.map