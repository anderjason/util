"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithRightShift = void 0;
function arrayWithRightShift(input) {
    let result = [...input];
    if (result.length > 0) {
        result.unshift(result.pop());
    }
    return result;
}
exports.arrayWithRightShift = arrayWithRightShift;
//# sourceMappingURL=arrayWithRightShift.js.map