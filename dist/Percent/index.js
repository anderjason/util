"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percent = void 0;
const __1 = require("..");
class Percent {
    constructor(value) {
        this._value = value;
    }
    static isEqual(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return a.isEqual(b);
    }
    static givenString(value) {
        if (value == null) {
            throw new Error("Value is required");
        }
        if (value.includes("%")) {
            return Percent.givenFraction(parseFloat(value), 100);
        }
        else {
            return Percent.givenFraction(parseFloat(value), 1);
        }
    }
    static givenFraction(numerator, denominator) {
        if (numerator == null || isNaN(numerator)) {
            throw new Error("Numerator is required");
        }
        if (denominator == null || isNaN(denominator)) {
            throw new Error("Denominator is required");
        }
        if (denominator == 0) {
            throw new Error("Denominator must not be 0");
        }
        return new Percent(numerator / denominator);
    }
    static givenPositionBetween(position, lowerBound, upperBound) {
        if (position == null || isNaN(position)) {
            throw new Error("Position is required");
        }
        if (lowerBound == null || isNaN(lowerBound)) {
            throw new Error("Lower bound is required");
        }
        if (upperBound == null || isNaN(upperBound)) {
            throw new Error("Upper bound is required");
        }
        if (lowerBound === upperBound && lowerBound === position) {
            return Percent.ofFull();
        }
        if (lowerBound >= upperBound) {
            throw new Error("Lower bound must be less than upper bound");
        }
        const result = __1.NumberUtil.numberWithHardLimit((position - lowerBound) / (upperBound - lowerBound), 0, 1);
        return Percent.givenFraction(result, 1);
    }
    static ofZero() {
        return this._zero;
    }
    static ofHalf() {
        return this._half;
    }
    static ofFull() {
        return this._full;
    }
    get isZero() {
        return this._value === 0;
    }
    get isFull() {
        return this._value === 1;
    }
    isEqual(other) {
        if (other == null) {
            return false;
        }
        if (!(other instanceof Percent)) {
            return false;
        }
        return this._value === other._value;
    }
    toString(fractionDigits) {
        return `${this.toNumber(100).toFixed(fractionDigits)}%`;
    }
    toNumber(denominator) {
        return this._value * denominator;
    }
    withInverse() {
        if (this.isZero || this.isFull) {
            return this;
        }
        return Percent.givenFraction(1, this.toNumber(1));
    }
}
exports.Percent = Percent;
Percent._zero = new Percent(0);
Percent._half = new Percent(0.5);
Percent._full = new Percent(1);
//# sourceMappingURL=index.js.map