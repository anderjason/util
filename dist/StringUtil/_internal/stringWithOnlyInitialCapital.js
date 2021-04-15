"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringWithOnlyInitialCapital = void 0;
const stringWithSpaceCase_1 = require("./stringWithSpaceCase");
function stringWithOnlyInitialCapital(input) {
    if (input == null) {
        throw new Error("input is required");
    }
    if (input.length === 0) {
        return input;
    }
    const split = stringWithSpaceCase_1.stringWithSpaceCase(input);
    return split.charAt(0).toUpperCase() + split.slice(1).toLowerCase();
}
exports.stringWithOnlyInitialCapital = stringWithOnlyInitialCapital;
//# sourceMappingURL=stringWithOnlyInitialCapital.js.map