"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalNthValueGivenAsyncIterable = void 0;
async function optionalNthValueGivenAsyncIterable(asyncIterable, zeroBasedIndex) {
    if (asyncIterable == null) {
        return undefined;
    }
    if (zeroBasedIndex == null) {
        throw new Error("targetN is required");
    }
    if (zeroBasedIndex < 0) {
        throw new Error("targetN cannot be negative");
    }
    let n = 0;
    for await (const item of asyncIterable) {
        if (n == zeroBasedIndex) {
            return item;
        }
        n += 1;
    }
    return undefined;
}
exports.optionalNthValueGivenAsyncIterable = optionalNthValueGivenAsyncIterable;
//# sourceMappingURL=optionalNthValueGivenAsyncIterable.js.map