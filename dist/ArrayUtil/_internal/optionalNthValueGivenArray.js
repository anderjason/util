"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalNthValueGivenArray = void 0;
/**
 * Returns the value at the specified position in an array, or undefined if the input is null or undefined, empty, or is not an array.
 *
 * @param input - An array
 * @param n - position
 * @returns The value at the specified position, or undefined
 */
function optionalNthValueGivenArray(array, n) {
    if (array == null) {
        return undefined;
    }
    if (!Array.isArray(array)) {
        return undefined;
    }
    return n < array.length ? array[n] : undefined;
}
exports.optionalNthValueGivenArray = optionalNthValueGivenArray;
//# sourceMappingURL=optionalNthValueGivenArray.js.map