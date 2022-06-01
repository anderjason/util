"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncIterableGivenCallback = void 0;
function asyncIterableGivenCallback(fn) {
    async function* result() {
        let isDone = false;
        let i = 0;
        let previousValue = undefined;
        while (!isDone) {
            const result = await fn(i, previousValue);
            isDone = result.isDone;
            previousValue = result.value;
            yield result.value;
            i += 1;
        }
    }
    return result;
}
exports.asyncIterableGivenCallback = asyncIterableGivenCallback;
//# sourceMappingURL=asyncIterableGivenCallback.js.map