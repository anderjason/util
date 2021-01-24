"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsEmpty = void 0;
/**
 * Checks if a string is empty or null.
 *
 * @param str - A string
 * @returns True if the string is null, undefined, or has a length of zero; false otherwise.
 */
function stringIsEmpty(str) {
    return str == null || str.length === 0;
}
exports.stringIsEmpty = stringIsEmpty;
//# sourceMappingURL=stringIsEmpty.js.map