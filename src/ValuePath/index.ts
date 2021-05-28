export type PathPart = string | number;

export class ValuePath<T = unknown> {
  static isEqual(a: ValuePath, b: ValuePath): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  static givenParts<T = unknown>(pathParts: PathPart[] = []): ValuePath<T> {
    if (pathParts == null) {
      return new ValuePath([]);
    }

    if (pathParts.some((part) => part == null)) {
      throw new Error("Path cannot contain null or undefined parts");
    }

    if (pathParts.some((part) => String(part).includes("."))) {
      throw new Error("Path parts cannot contain a period character");
    }

    return new ValuePath(pathParts);
  }

  static givenString<T = unknown>(path: string = ""): ValuePath<T> {
    if (path == null) {
      return new ValuePath([]);
    }

    return new ValuePath(path.split("."));
  }

  static ofEmpty(): ValuePath {
    return new ValuePath([]);
  }

  private _pathParts: PathPart[];

  private constructor(pathParts: PathPart[]) {
    this._pathParts = pathParts;
  }

  get isEmpty(): boolean {
    return this._pathParts.length === 0;
  }

  get length(): number {
    return this._pathParts.length;
  }

  isEqual(other: ValuePath<T>): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof ValuePath)) {
      return false;
    }

    return this.toString() === other.toString();
  }

  isAncestorOf(other: ValuePath): boolean {
    if (other == null) {
      return false;
    }

    const thisString = this.toString();
    const otherString = other.toString();

    return (
      otherString.startsWith(thisString) &&
      otherString.length > thisString.length
    );
  }

  isEqualOrAncestorOf(other: ValuePath): boolean {
    if (other == null) {
      return false;
    }

    const thisString = this.toString();
    const otherString = other.toString();

    return otherString.startsWith(thisString);
  }

  isDescendantOf(other: ValuePath): boolean {
    if (other == null) {
      return false;
    }

    return other.isAncestorOf(this);
  }

  isEqualOrDescendantOf(other: ValuePath): boolean {
    if (other == null) {
      return false;
    }

    const thisString = this.toString();
    const otherString = other.toString();

    return thisString.startsWith(otherString);
  }

  toParts(): PathPart[] {
    return this._pathParts;
  }

  toString(): string {
    return this._pathParts.join(".");
  }

  toRelativePath<T = unknown>(descendant: ValuePath): ValuePath<T> {
    if (descendant == null) {
      throw new Error("Descendant is required");
    }

    if (!descendant.isDescendantOf(this)) {
      throw new Error("Specified path is not a descendant of this VCC path");
    }

    return new ValuePath(descendant.toParts().slice(this.toParts().length));
  }

  withRelativeParts<T = unknown>(pathParts: PathPart[] = []): ValuePath<T> {
    if (pathParts == null) {
      throw new Error("Path parts are required");
    }

    return new ValuePath([...this._pathParts, ...pathParts]);
  }

  withRelativeString<T = unknown>(pathString: string): ValuePath<T> {
    if (pathString == null) {
      throw new Error("Path string is required");
    }

    const parts = pathString.split(".");

    return new ValuePath([...this._pathParts, ...parts]);
  }
}
