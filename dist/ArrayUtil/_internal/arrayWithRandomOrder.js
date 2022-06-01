"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayWithRandomOrder = void 0;
function arrayWithRandomOrder(input) {
    if (input == null) {
        throw new Error("Input is required");
    }
    const result = [...input];
    let currentIndex = result.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        const temp = result[currentIndex];
        result[currentIndex] = result[randomIndex];
        result[randomIndex] = temp;
    }
    return result;
}
exports.arrayWithRandomOrder = arrayWithRandomOrder;
//# sourceMappingURL=arrayWithRandomOrder.js.map