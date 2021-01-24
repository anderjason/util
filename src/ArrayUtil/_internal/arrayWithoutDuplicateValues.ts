/**
 * Removes duplicate values from an array, preserving the order of the input array.
 *
 * @param values - An array
 * @returns A new array with duplicate values removed
 *
 * @remarks The input array is not modified by this operation.
 */
export function arrayWithoutDuplicateValues<T>(values: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];

  // preserve order of the items

  values.forEach((item) => {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  });

  return result;
}
