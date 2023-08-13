"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithRandomOrder = void 0;
const NumberUtil_1 = require("../../NumberUtil");
const randomNumberGivenInput_1 = require("../../NumberUtil/_internal/randomNumberGivenInput");
function arrayWithRandomOrder(input, seed) {
    if (input == null) {
        throw new Error("Input is required");
    }
    const result = [...input];
    let currentIndex = result.length;
    let randomIndex;
    const rand = randomNumberGivenInput_1.randomNumberSequenceGivenInput(seed !== null && seed !== void 0 ? seed : Math.random());
    while (currentIndex != 0) {
        randomIndex = Math.floor(NumberUtil_1.NumberUtil.numberWithRangeMap(rand.next().value, 0, 1, 0, currentIndex));
        currentIndex--;
        const temp = result[currentIndex];
        result[currentIndex] = result[randomIndex];
        result[randomIndex] = temp;
    }
    return result;
}
exports.arrayWithRandomOrder = arrayWithRandomOrder;
//# sourceMappingURL=arrayWithRandomOrder.js.map