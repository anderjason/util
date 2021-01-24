/**
 * Creates a promise that invokves a callback function the specified number of times.
 *
 * @param times - The number of times to invoke the callback
 * @param fn - A callback function
 * @returns A promise
 */
export declare function asyncSequenceGivenCountAndCallback(times: number, fn: (idx: number) => Promise<void>): Promise<void>;
