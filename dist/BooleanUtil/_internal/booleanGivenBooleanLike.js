"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanGivenBooleanLike = void 0;
function booleanGivenBooleanLike(input) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === "boolean") {
        return input;
    }
    return input === "true";
}
exports.booleanGivenBooleanLike = booleanGivenBooleanLike;
//# sourceMappingURL=booleanGivenBooleanLike.js.map