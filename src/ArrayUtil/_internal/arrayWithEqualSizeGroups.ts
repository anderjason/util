/**
 * Splits an array into smaller arrays of the specified size.
 *
 * @remarks The input array is not modified.
 *
 * @param input - An array
 * @param groupSize - The maximum length of each output array
 * @returns An array of arrays, where each output array has a number
 *          of elements from the input array, or fewer if there are
 *          not enough elements left to fill the output array.
 */
export function arrayWithEqualSizeGroups<T>(
  input: T[],
  groupSize: number
): T[][] {
  if (input == null) {
    throw new Error("input is required");
  }

  if (groupSize == null) {
    throw new Error("groupSize is required");
  }

  if (groupSize < 1) {
    throw new Error("groupSize must be greater than 0");
  }

  const result = [];
  const length = input.length;

  let i = 0;
  while (i < length) {
    result.push(input.slice(i, (i += groupSize)));
  }

  return result;
}
