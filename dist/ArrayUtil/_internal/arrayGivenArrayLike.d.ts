/**
 * Converts an object that has integer keys to an array. This is useful when an object looks like an array, but isn't actually one.
 *
 * @param input - An array, or an object with integer keys
 * @returns An array, or the original input if the input is not an object or array
 *
 * @remarks This operation does not modify the input.
 */
export declare function arrayGivenArrayLike(input: any): any;
