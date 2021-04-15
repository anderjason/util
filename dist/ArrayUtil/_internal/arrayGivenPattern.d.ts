/**
 * Creates an array of the specified length, filled with a repeating pattern.
 *
 * @param input - The input pattern
 * @param length - The length of the new array
 *
 * @remarks If the output array is smaller than the input array, only part of the input array will be used.
 *
 * @returns An array with the specified length, filled with values from the input array repeated as many times as necessary.
 */
export declare function arrayGivenPattern<T>(input: T[], length: number): T[];
