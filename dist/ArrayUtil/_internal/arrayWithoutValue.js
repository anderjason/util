"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithoutValue = void 0;
/**
 * Removes a value from an array, if the value exists.
 *
 * @param input - An array
 * @param excludeValue - The value to remove from the array
 * @returns A new array with the value removed
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithoutValue(input, excludeValue) {
    if (input == null) {
        throw new Error("input is required");
    }
    if (excludeValue == null) {
        return [...input];
    }
    return input.filter((item) => item !== excludeValue);
}
exports.arrayWithoutValue = arrayWithoutValue;
//# sourceMappingURL=arrayWithoutValue.js.map