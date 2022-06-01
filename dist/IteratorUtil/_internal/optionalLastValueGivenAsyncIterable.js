"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalLastValueGivenAsyncIterable = void 0;
async function optionalLastValueGivenAsyncIterable(asyncIterable) {
    if (asyncIterable == null) {
        return undefined;
    }
    let lastValue = undefined;
    for await (const item of asyncIterable) {
        lastValue = item;
    }
    return lastValue;
}
exports.optionalLastValueGivenAsyncIterable = optionalLastValueGivenAsyncIterable;
//# sourceMappingURL=optionalLastValueGivenAsyncIterable.js.map