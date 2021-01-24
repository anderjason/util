"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithReversedOrder = void 0;
/**
 * Reverses the values in an array.
 *
 * @param input - An array
 * @returns A new array with the values in reverse order
 *
 * @remarks This operation does not modify the input array.
 */
function arrayWithReversedOrder(input) {
    if (input == null) {
        throw new Error("Input is required");
    }
    const clone = [...input];
    return clone.reverse();
}
exports.arrayWithReversedOrder = arrayWithReversedOrder;
//# sourceMappingURL=arrayWithReversedOrder.js.map