/**
 * Moves one value from the beginning of an array to the end, shifting all the other values one space to the left.
 *
 * @param input - An array
 * @returns A new array
 *
 * @remarks This operation does not modify the input array.
 */
export function arrayWithLeftShift<T>(input: T[]): T[] {
  let result = [...input];
  if (result.length > 0) {
    result.push(result.shift());
  }
  return result;
}
