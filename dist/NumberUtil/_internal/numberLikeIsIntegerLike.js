"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberLikeIsIntegerLike = void 0;
function numberLikeIsIntegerLike(input) {
    if (typeof input === "number") {
        return Number.isInteger(input);
    }
    return Number.isInteger(parseFloat(input));
}
exports.numberLikeIsIntegerLike = numberLikeIsIntegerLike;
//# sourceMappingURL=numberLikeIsIntegerLike.js.map