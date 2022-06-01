"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncIterableWithFilter = void 0;
function asyncIterableWithFilter(asyncIterable, filter) {
    async function* result() {
        for await (const item of asyncIterable) {
            const isIncluded = await filter(item);
            if (isIncluded) {
                yield item;
            }
        }
    }
    return result;
}
exports.asyncIterableWithFilter = asyncIterableWithFilter;
//# sourceMappingURL=asyncIterableWithFilter.js.map