/**
 * Gets a random value from an array.
 *
 * @param input - An array
 * @returns Returns a random value from the input array, or undefined if the input is null, empty, or not an array.
 */
export function optionalRandomValueGivenArray<T>(input?: T[]): T | undefined {
  if (input == null) {
    return undefined;
  }

  if (!Array.isArray(input)) {
    return undefined;
  }

  if (input.length === 0) {
    return undefined;
  }

  return input[Math.floor(Math.random() * input.length)];
}
