import { NumberUtil } from "..";

export class Percent {
  private static _zero = new Percent(0);
  private static _half = new Percent(0.5);
  private static _full = new Percent(1);

  static isEqual(a: Percent, b: Percent): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  static givenString(value: string): Percent {
    if (value == null) {
      throw new Error("Value is required");
    }

    if (value.includes("%")) {
      return Percent.givenFraction(parseFloat(value), 100);
    } else {
      return Percent.givenFraction(parseFloat(value), 1);
    }
  }

  static givenFraction(numerator: number, denominator: number): Percent {
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

  static givenPositionBetween(position: number, lowerBound: number, upperBound: number): Percent {
    if (position == null || isNaN(position)) {
      throw new Error("Position is required");
    }

    if (lowerBound == null || isNaN(lowerBound)) {
      throw new Error("Lower bound is required");
    }

    if (upperBound == null || isNaN(upperBound)) {
      throw new Error("Upper bound is required");
    }

    if (lowerBound >= upperBound) {
      throw new Error("Lower bound must be less than upper bound");
    }

    const result = NumberUtil.numberWithHardLimit((position - lowerBound) / (upperBound - lowerBound), 0, 1);
    return Percent.givenFraction(result, 1);
  }

  static ofZero(): Percent {
    return this._zero;
  }

  static ofHalf(): Percent {
    return this._half;
  }

  static ofFull(): Percent {
    return this._full;
  }

  private _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  get isZero(): boolean {
    return this._value === 0;
  }

  get isFull(): boolean {
    return this._value === 1;
  }

  isEqual(other: Percent): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof Percent)) {
      return false;
    }

    return this._value === other._value;
  }

  toString(fractionDigits?: number): string {
    return `${this.toNumber(100).toFixed(fractionDigits)}%`;
  }

  toNumber(denominator: number): number {
    return this._value * denominator;
  }

  withInverse(): Percent {
    if (this.isZero || this.isFull) {
      return this;
    }

    return Percent.givenFraction(1, this.toNumber(1));
  }
}
