/**
 * Compares the items in two arrays using a predicate function.
 *
 * @param inputA - An array
 * @param inputB - An array
 * @param fn - A function that compares two items and returns true if they are equal.
 * @returns True if all of the items are equal, false otherwise.
 */
export declare function arrayIsEqual<T>(inputA: T[], inputB: T[], fn: (a: T, b: T) => boolean): boolean;
