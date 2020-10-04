"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatGivenFloatLike = void 0;
function floatGivenFloatLike(input) {
    if (input == null) {
        throw new Error("input is required");
    }
    if (typeof input === "number") {
        return input;
    }
    const n = parseFloat(input);
    if (isNaN(n)) {
        throw new Error("input must be float-like");
    }
    return n;
}
exports.floatGivenFloatLike = floatGivenFloatLike;
//# sourceMappingURL=floatGivenFloatLike.js.map