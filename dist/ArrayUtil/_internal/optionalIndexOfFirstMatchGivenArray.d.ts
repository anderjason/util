/**
 * Gets an index from an array given a callback.
 *
 * @param array - An array
 * @param isMatch - A callback that returns true or false, given an array value
 * @returns The index of the first value for which the callback return true, or undefined.
 */
export declare function optionalIndexOfFirstMatchGivenArray<T>(array: T[] | null | undefined, isMatch: (value: T) => boolean): number | undefined;
