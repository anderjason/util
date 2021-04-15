/**
 * Returns a subset of an array for pagination.
 *
 * @param input - An array
 * @param startIndex - The position of the first value to return
 * @param pageSize - The maximum number of values to return
 * @returns A new array with the specified values
 *
 * @remarks This operation does not modify the input array.
 */
export declare function arrayWithPageSubset<T>(input: T[], startIndex: number, pageSize: number): T[];
