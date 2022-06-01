"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGivenAsyncIterable = void 0;
async function arrayGivenAsyncIterable(asyncIterable, limit) {
    const result = [];
    let i = 0;
    for await (const item of asyncIterable) {
        result.push(item);
        i++;
        if (limit != null && i >= limit) {
            break;
        }
    }
    return result;
}
exports.arrayGivenAsyncIterable = arrayGivenAsyncIterable;
//# sourceMappingURL=arrayGivenAsyncIterable.js.map