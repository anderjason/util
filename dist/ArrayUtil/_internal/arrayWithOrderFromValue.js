"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithOrderFromValue = void 0;
let collator = null;
function compare(valueA, valueB) {
    if (valueA == null && valueB == null) {
        return 0;
    }
    if (valueA == null) {
        return -1;
    }
    if (valueB == null) {
        return 1;
    }
    if (typeof valueA == "string" && typeof valueB == "string") {
        if (collator == null) {
            collator = new Intl.Collator("en", {
                numeric: true,
                sensitivity: "base",
            });
        }
        return collator.compare(valueA, valueB);
    }
    if (valueA < valueB) {
        return -1;
    }
    if (valueB < valueA) {
        return 1;
    }
    return 0;
}
/**
 * Sorts an array by the return value of a callback invoked on each value.
 *
 * @param input - An array
 * @param getSortableValue - A callback that returns a sortable value, given an array value
 * @param direction - The string "ascending" or "descending"
 * @returns A new array
 *
 * @remarks The input array is not modified by this operation.
 */
function arrayWithOrderFromValue(input, getSortableValue, direction) {
    const result = [...input];
    result.sort((a, b) => {
        const valueA = getSortableValue(a);
        const valueB = getSortableValue(b);
        const compared = compare(valueA, valueB);
        if (direction === "ascending") {
            return compared;
        }
        else {
            return compared * -1;
        }
    });
    return result;
}
exports.arrayWithOrderFromValue = arrayWithOrderFromValue;
//# sourceMappingURL=arrayWithOrderFromValue.js.map