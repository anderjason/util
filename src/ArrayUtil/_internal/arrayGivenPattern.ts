/**
 * Creates an array of the specified length, filled with a repeating pattern.
 *
 * @param input - The input pattern
 * @param length - The length of the new array
 *
 * @remarks If the output array is smaller than the input array, only part of the input array will be used.
 *
 * @returns An array with the specified length, filled with values from the input array repeated as many times as necessary.
 */
export function arrayGivenPattern<T>(input: T[], length: number): T[] {
  if (input == null) {
    throw new Error("input is required");
  }

  if (length == null) {
    throw new Error("length is required");
  }

  if (length < 0) {
    throw new Error("length must not be negative");
  }

  if (length == 0) {
    return [];
  }

  const result: T[] = [];

  for (let i = 0; i < length; i++) {
    const inputIndex = i % input.length;
    result.push(input[inputIndex]);
  }

  return result;
}
