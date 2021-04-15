/**
 * Checks if an array is empty or null.
 *
 * @param input - An array
 * @returns True if the array is null, undefined, or has a length of zero; false otherwise.
 */
export function arrayIsEmptyOrNull<T>(input?: T[]): boolean {
  if (input == null) {
    return true;
  }

  if (!Array.isArray(input)) {
    throw new Error("input must be an array");
  }

  return input.length === 0;
}
