"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithLeftShift = void 0;
function arrayWithLeftShift(input) {
    let result = [...input];
    if (result.length > 0) {
        result.push(result.shift());
    }
    return result;
}
exports.arrayWithLeftShift = arrayWithLeftShift;
//# sourceMappingURL=arrayWithLeftShift.js.map