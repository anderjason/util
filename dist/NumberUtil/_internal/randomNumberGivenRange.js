"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberGivenRange = void 0;
const randomNumberGivenInput_1 = require("./randomNumberGivenInput");
function randomNumberGivenRange(min, max, seed = Math.random()) {
    const float = randomNumberGivenInput_1.randomNumberGivenInput(seed);
    return min + float * (max - min);
}
exports.randomNumberGivenRange = randomNumberGivenRange;
//# sourceMappingURL=randomNumberGivenRange.js.map