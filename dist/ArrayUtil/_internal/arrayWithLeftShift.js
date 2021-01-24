"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithLeftShift = void 0;
/**
 * Moves one value from the beginning of an array to the end, shifting all the other values one space to the left.
 *
 * @param input - An array
 * @returns A new array
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithLeftShift(input) {
    let result = [...input];
    if (result.length > 0) {
        result.push(result.shift());
    }
    return result;
}
exports.arrayWithLeftShift = arrayWithLeftShift;
//# sourceMappingURL=arrayWithLeftShift.js.map