"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncValuesGivenArrayAndConverter = void 0;
const asyncSequenceGivenArrayAndCallback_1 = require("./asyncSequenceGivenArrayAndCallback");
/**
 * Creates a promise of an array of values returned from an async map function
 *
 * @param input - An array
 * @param fn - An async map function
 * @returns A promise of an array
 */
function asyncValuesGivenArrayAndConverter(input, fn) {
    const result = [];
    return (0, asyncSequenceGivenArrayAndCallback_1.asyncSequenceGivenArrayAndCallback)(input, (element, idx) => {
        return fn(element, idx).then((elementResult) => {
            result.push(elementResult);
        });
    }).then(() => {
        return result;
    });
}
exports.asyncValuesGivenArrayAndConverter = asyncValuesGivenArrayAndConverter;
//# sourceMappingURL=asyncValuesGivenArrayAndConverter.js.map