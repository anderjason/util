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
    if (typeof input === "string") {
        return input.toLowerCase() === "true";
    }
    throw new Error(`Unsupported input type in booleanGivenBooleanLike (got ${typeof input}, expected boolean or string)`);
}
exports.booleanGivenBooleanLike = booleanGivenBooleanLike;
//# sourceMappingURL=booleanGivenBooleanLike.js.map