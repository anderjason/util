"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countGivenAsyncIterable = void 0;
async function countGivenAsyncIterable(asyncIterable) {
    let result = 0;
    for await (const item of asyncIterable) {
        result += 1;
    }
    return result;
}
exports.countGivenAsyncIterable = countGivenAsyncIterable;
//# sourceMappingURL=countGivenAsyncIterable.js.map