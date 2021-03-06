/**
 * Reverses the values in an array.
 *
 * @param input - An array
 * @returns A new array with the values in reverse order
 *
 * @remarks This operation does not modify the input array.
 */
export function arrayWithReversedOrder<T>(input: T[]): T[] {
  if (input == null) {
    throw new Error("Input is required");
  }

  const clone = [...input];
  return clone.reverse();
}
