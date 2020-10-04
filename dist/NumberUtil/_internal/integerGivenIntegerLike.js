"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integerGivenIntegerLike = void 0;
function integerGivenIntegerLike(input) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === "number") {
        return input;
    }
    return parseInt(input, 10);
}
exports.integerGivenIntegerLike = integerGivenIntegerLike;
//# sourceMappingURL=integerGivenIntegerLike.js.map