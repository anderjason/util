"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberLikeIsFloatLike = void 0;
function numberLikeIsFloatLike(input) {
    if (typeof input === "number") {
        return !Number.isInteger(input);
    }
    const n = parseFloat(input);
    if (isNaN(n)) {
        return false;
    }
    return !Number.isInteger(n);
}
exports.numberLikeIsFloatLike = numberLikeIsFloatLike;
//# sourceMappingURL=numberLikeIsFloatLike.js.map