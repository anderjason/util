"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalRandomValueGivenArray = void 0;
/**
 * Gets a random value from an array.
 *
 * @param input - An array
 * @returns Returns a random value from the input array, or undefined if the input is null, empty, or not an array.
 */
function optionalRandomValueGivenArray(input) {
    if (input == null) {
        return undefined;
    }
    if (!Array.isArray(input)) {
        return undefined;
    }
    if (input.length === 0) {
        return undefined;
    }
    return input[Math.floor(Math.random() * input.length)];
}
exports.optionalRandomValueGivenArray = optionalRandomValueGivenArray;
//# sourceMappingURL=optionalRandomValueGivenArray.js.map