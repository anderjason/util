/**
 * Adds a value to an array.
 *
 * @param input - An array
 * @param value - The value to include
 * @param allowDuplicates - If true, the value will always be added; if false, the value will only be added if it does not already exist in the array.
 * @returns A new array
 *
 * @remarks This operation does not modify the input array
 */
export function arrayWithValue<T>(
  input: T[],
  value: T,
  allowDuplicates: boolean
): T[] {
  const result = [...input];

  if (result.indexOf(value) === -1 || allowDuplicates) {
    result.push(value);
  }

  return result;
}
