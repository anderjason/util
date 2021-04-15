/**
 * Moves one value from the end of an array to the beginning, shifting all the other values one space to the right.
 *
 * @param input - An array
 * @returns A new array
 *
 * @remarks This operation does not modify the input array.
 */
export function arrayWithRightShift<T>(input: T[]): T[] {
  let result = [...input];
  if (result.length > 0) {
    result.unshift(result.pop());
  }
  return result;
}
