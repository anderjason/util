"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithOrderFromValue = void 0;
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
    if (direction === "descending") {
        result.sort((a, b) => {
            const valueA = getSortableValue(a);
            const valueB = getSortableValue(b);
            if (valueA == null && valueB == null) {
                return 0;
            }
            if (valueA == null) {
                return 1;
            }
            if (valueB == null) {
                return -1;
            }
            const result = String(valueA).localeCompare(String(valueB), undefined, { numeric: true });
            return result * -1;
        });
    }
    else {
        result.sort((a, b) => {
            const valueA = getSortableValue(a);
            const valueB = getSortableValue(b);
            if (valueA == null && valueB == null) {
                return 0;
            }
            if (valueA == null) {
                return -1;
            }
            if (valueB == null) {
                return 1;
            }
            const result = String(valueA).localeCompare(String(valueB), undefined, { numeric: true });
            return result;
        });
    }
    return result;
}
exports.arrayWithOrderFromValue = arrayWithOrderFromValue;
//# sourceMappingURL=arrayWithOrderFromValue.js.map