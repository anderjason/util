"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectWithoutPath = void 0;
const __1 = require("../..");
function objectWithoutPath(object, valuePath) {
    if (valuePath == null) {
        throw new Error("Value path is required");
    }
    let index = 0;
    let parts;
    if (Array.isArray(valuePath)) {
        parts = valuePath;
    }
    else {
        parts = valuePath.toParts();
    }
    let length = parts.length;
    if (length === 0) {
        return undefined;
    }
    // shallow clone
    let result;
    if (Array.isArray(object)) {
        result = [...object];
    }
    else {
        result = { ...object };
    }
    // mutate the clone
    let pointer = result;
    while (pointer != null && index < length - 1) {
        let key = parts[index];
        if (pointer[key] == null) {
            break;
        }
        if (Array.isArray(pointer[key])) {
            pointer[key] = [...pointer[key]];
        }
        else {
            pointer[key] = { ...pointer[key] };
        }
        pointer = pointer[key];
        index += 1;
    }
    if (pointer != null) {
        if (Array.isArray(pointer)) {
            const arrayIndex = __1.NumberUtil.integerGivenIntegerLike(parts[index]);
            pointer.splice(arrayIndex, 1);
        }
        else {
            delete pointer[parts[index]];
        }
    }
    return result;
}
exports.objectWithoutPath = objectWithoutPath;
//# sourceMappingURL=objectWithoutPath.js.map