"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithMovedValue = void 0;
/**
 * Moves one value from the beginning of an array to the end, shifting all the other values one space to the left.
 *
 * @param input - An array
 * @returns A new array
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithMovedValue(input, oldIndex, newIndex) {
    let result;
    if (input != null) {
        result = [...input];
    }
    else {
        result = [];
    }
    while (oldIndex < 0) {
        oldIndex += result.length;
    }
    while (newIndex < 0) {
        newIndex += result.length;
    }
    if (newIndex >= result.length) {
        let k = newIndex - result.length + 1;
        while (k--) {
            result.push(undefined);
        }
    }
    result.splice(newIndex, 0, result.splice(oldIndex, 1)[0]);
    return result;
}
exports.arrayWithMovedValue = arrayWithMovedValue;
//# sourceMappingURL=arrayWithMovedValue.js.map