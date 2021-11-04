"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayIsEqual = void 0;
/**
 * Compares the items in two arrays using a predicate function.
 *
 * @param inputA - An array
 * @param inputB - An array
 * @param fn - A function that compares two items and returns true if they are equal.
 * @returns True if all of the items are equal, false otherwise.
 */
function arrayIsEqual(inputA, inputB, fn) {
    if (inputA == null && inputB == null) {
        return true;
    }
    if (inputA == null || inputB == null) {
        return false;
    }
    if (!Array.isArray(inputA)) {
        throw new Error("inputA must be an array");
    }
    if (!Array.isArray(inputB)) {
        throw new Error("inputB must be an array");
    }
    if (inputA.length !== inputB.length) {
        return false;
    }
    return inputA.every((item, index) => fn(item, inputB[index]));
}
exports.arrayIsEqual = arrayIsEqual;
//# sourceMappingURL=arrayIsEqual.js.map