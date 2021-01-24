/**
 * Removes a value from an array, if the value exists.
 *
 * @param input - An array
 * @param excludeValue - The value to remove from the array
 * @returns A new array with the value removed
 *
 * @remarks This operation does not modify the input array.
 */
export function arrayWithoutValue<T>(input: T[], excludeValue: T): T[] {
  if (input == null) {
    throw new Error("input is required");
  }

  if (excludeValue == null) {
    return [...input];
  }

  return input.filter((item) => item !== excludeValue);
}
