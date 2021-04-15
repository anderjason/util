"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberArrayGivenRange = void 0;
/**
 * Creates an array of numbers in the specified range.
 *
 * @param firstNumber - The lower bound of the range
 * @param lastNumber - The upper bound of the range
 * @returns A new array filled with numbers from the range
 */
function numberArrayGivenRange(firstNumber, lastNumber) {
    const result = [];
    if (lastNumber === firstNumber) {
        return [firstNumber];
    }
    if (firstNumber < lastNumber) {
        for (let i = firstNumber; i < lastNumber + 1; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = lastNumber; i > firstNumber - 1; i--) {
            result.push(i);
        }
    }
    return result;
}
exports.numberArrayGivenRange = numberArrayGivenRange;
//# sourceMappingURL=numberArrayGivenRange.js.map