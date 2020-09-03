"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncDelayOfForever = void 0;
function asyncDelayOfForever() {
    // promise never resolves
    return new Promise(() => {
        // need to keep a setInterval in the event loop because
        // otherwise the process might eventually exit
        setInterval(Function.prototype, 600000); // do nothing every 10 minutes
    });
}
exports.asyncDelayOfForever = asyncDelayOfForever;
//# sourceMappingURL=asyncDelayOfForever.js.map