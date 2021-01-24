"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncValueGivenArrayAndFilter = void 0;
const asyncSequenceGivenArrayAndCallback_1 = require("./asyncSequenceGivenArrayAndCallback");
/**
 * Creates a promise that returns the first value from an array that matches an async filter function.
 *
 * @param input - An array
 * @param fn - An async filter function that should return true or false
 * @returns A promise of a value or undefined
 */
async function asyncValueGivenArrayAndFilter(input, fn) {
    let result = undefined;
    await asyncSequenceGivenArrayAndCallback_1.asyncSequenceGivenArrayAndCallback(input, (element) => {
        return fn(element).then((isMatch) => {
            if (isMatch == true && result == null) {
                result = element;
            }
        });
    });
    return result;
}
exports.asyncValueGivenArrayAndFilter = asyncValueGivenArrayAndFilter;
//# sourceMappingURL=asyncValueGivenArrayAndFilter.js.map