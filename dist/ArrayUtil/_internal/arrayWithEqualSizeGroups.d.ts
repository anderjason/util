/**
 * Splits an array into smaller arrays of the specified size.
 *
 * @remarks The input array is not modified.
 *
 * @param input - An array
 * @param groupSize - The maximum length of each output array
 * @returns An array of arrays, where each output array has a number
 *          of elements from the input array, or fewer if there are
 *          not enough elements left to fill the output array.
 */
export declare function arrayWithEqualSizeGroups<T>(input: T[], groupSize: number): T[][];
