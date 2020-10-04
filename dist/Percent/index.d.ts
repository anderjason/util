export declare class Percent {
    private static _zero;
    private static _half;
    private static _full;
    static isEqual(a: Percent, b: Percent): boolean;
    static givenString(value: string): Percent;
    static givenFraction(numerator: number, denominator: number): Percent;
    static ofZero(): Percent;
    static ofHalf(): Percent;
    static ofFull(): Percent;
    private _value;
    private constructor();
    get isZero(): boolean;
    get isFull(): boolean;
    isEqual(other: Percent): boolean;
    toString(fractionDigits?: number): string;
    toNumber(denominator: number): number;
    withInverse(): Percent;
}
