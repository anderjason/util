"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalLastValueGivenArray = void 0;
/**
 * Gets the last value in an array
 *
 * @param array - An array
 * @returns The last value in the array, or undefined if the input is null or undefined, empty, or not an array.
 */
function optionalLastValueGivenArray(array) {
    if (array == null) {
        return undefined;
    }
    if (!Array.isArray(array)) {
        return undefined;
    }
    if (array.length === 0) {
        return undefined;
    }
    return array[array.length - 1];
}
exports.optionalLastValueGivenArray = optionalLastValueGivenArray;
//# sourceMappingURL=optionalLastValueGivenArray.js.map