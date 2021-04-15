/**
 * Creates a promise that invokes a callback once for each value in an array.
 *
 * @param array - An array
 * @param fn - An async callback function
 * @returns A promise
 */
export declare function asyncSequenceGivenArrayAndCallback<T>(array: T[], fn: (item: T, idx: number, array: T[]) => Promise<any>): Promise<void>;
