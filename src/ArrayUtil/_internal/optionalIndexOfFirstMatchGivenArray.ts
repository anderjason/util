/**
 * Gets an index from an array given a callback.
 *
 * @param array - An array
 * @param isMatch - A callback that returns true or false, given an array value
 * @returns The index of the first value for which the callback return true, or undefined.
 */
export function optionalIndexOfFirstMatchGivenArray<T>(
  array: T[] | null | undefined,
  isMatch: (value: T) => boolean
): number | undefined {
  if (array == null) {
    return undefined;
  }

  if (array.length === 0) {
    return undefined;
  }

  if (!Array.isArray(array)) {
    throw new Error("Expected an array");
  }

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (isMatch(value)) {
      return i;
    }
  }

  return undefined;
}
