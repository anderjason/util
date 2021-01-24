"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanGivenBooleanLike = void 0;
/**
 * Converts a boolean or a string to a boolean.
 *
 * @param input - A
 * @returns An array, or the original input if the input is not an object or array
 *
 * @remarks This operation does not modify the input.
 */
function booleanGivenBooleanLike(input) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === "boolean") {
        return input;
    }
    return input === "true";
}
exports.booleanGivenBooleanLike = booleanGivenBooleanLike;
//# sourceMappingURL=booleanGivenBooleanLike.js.map