"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithPageSubset = void 0;
/**
 * Returns a subset of an array for pagination.
 *
 * @param input - An array
 * @param startIndex - The position of the first value to return
 * @param pageSize - The maximum number of values to return
 * @returns A new array with the specified values
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithPageSubset(input, startIndex, pageSize) {
    const start = startIndex;
    const end = start + pageSize;
    return input.slice(start, end);
}
exports.arrayWithPageSubset = arrayWithPageSubset;
//# sourceMappingURL=arrayWithPageSubset.js.map