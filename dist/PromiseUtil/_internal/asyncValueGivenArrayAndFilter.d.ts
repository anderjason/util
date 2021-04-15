/**
 * Creates a promise that returns the first value from an array that matches an async filter function.
 *
 * @param input - An array
 * @param fn - An async filter function that should return true or false
 * @returns A promise of a value or undefined
 */
export declare function asyncValueGivenArrayAndFilter<T>(input: T[], fn: (element: T) => Promise<boolean>): Promise<T | undefined>;
