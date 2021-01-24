"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithRightShift = void 0;
/**
 * Moves one value from the end of an array to the beginning, shifting all the other values one space to the right.
 *
 * @param input - An array
 * @returns A new array
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithRightShift(input) {
    let result = [...input];
    if (result.length > 0) {
        result.unshift(result.pop());
    }
    return result;
}
exports.arrayWithRightShift = arrayWithRightShift;
//# sourceMappingURL=arrayWithRightShift.js.map