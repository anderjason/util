/**
 * Returns the value at the specified position in an array, or undefined if the input is null or undefined, empty, or is not an array.
 *
 * @param input - An array
 * @param n - position
 * @returns The value at the specified position, or undefined
 */
export function optionalNthValueGivenArray<T>(
  array: T[] | undefined | null,
  n: number
): T | undefined {
  if (array == null) {
    return undefined;
  }

  if (!Array.isArray(array)) {
    return undefined;
  }

  return n < array.length ? array[n] : undefined;
}
