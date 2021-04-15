"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithoutDuplicateValues = void 0;
/**
 * Removes duplicate values from an array, preserving the order of the input array.
 *
 * @param values - An array
 * @returns A new array with duplicate values removed
 *
 * @remarks The input array is not modified by this operation.
 */
function arrayWithoutDuplicateValues(values) {
    const seen = new Set();
    const result = [];
    // preserve order of the items
    values.forEach((item) => {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    });
    return result;
}
exports.arrayWithoutDuplicateValues = arrayWithoutDuplicateValues;
//# sourceMappingURL=arrayWithoutDuplicateValues.js.map