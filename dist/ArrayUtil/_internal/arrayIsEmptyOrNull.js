"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayIsEmptyOrNull = void 0;
/**
 * Checks if an array is empty or null.
 *
 * @param input - An array
 * @returns True if the array is null, undefined, or has a length of zero; false otherwise.
 */
function arrayIsEmptyOrNull(input) {
    if (input == null) {
        return true;
    }
    if (!Array.isArray(input)) {
        throw new Error("input must be an array");
    }
    return input.length === 0;
}
exports.arrayIsEmptyOrNull = arrayIsEmptyOrNull;
//# sourceMappingURL=arrayIsEmptyOrNull.js.map