"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberWithCycle = void 0;
function numberWithCycle(time, cycleLength) {
    let t = (time % cycleLength) / cycleLength;
    if (t < 0.5) {
        return t * 2;
    }
    t -= 0.5;
    return 1 - t * 2;
}
exports.numberWithCycle = numberWithCycle;
//# sourceMappingURL=numberWithCycle.js.map