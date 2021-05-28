export declare type PathPart = string | number;
export declare class ValuePath<T = unknown> {
    static isEqual(a: ValuePath, b: ValuePath): boolean;
    static givenParts<T = unknown>(pathParts?: PathPart[]): ValuePath<T>;
    static givenString<T = unknown>(path?: string): ValuePath<T>;
    static ofEmpty(): ValuePath;
    private _pathParts;
    private constructor();
    get isEmpty(): boolean;
    get length(): number;
    isEqual(other: ValuePath<T>): boolean;
    isAncestorOf(other: ValuePath): boolean;
    isEqualOrAncestorOf(other: ValuePath): boolean;
    isDescendantOf(other: ValuePath): boolean;
    isEqualOrDescendantOf(other: ValuePath): boolean;
    toParts(): PathPart[];
    toString(): string;
    toRelativePath<T = unknown>(descendant: ValuePath): ValuePath<T>;
    withRelativeParts<T = unknown>(pathParts?: PathPart[]): ValuePath<T>;
    withRelativeString<T = unknown>(pathString: string): ValuePath<T>;
}
