/**
 * Converts a boolean or a string to a boolean.
 *
 * @param input - A
 * @returns An array, or the original input if the input is not an object or array
 *
 * @remarks This operation does not modify the input.
 */
export function booleanGivenBooleanLike(input: any): boolean {
  if (input == null) {
    return undefined;
  }

  if (typeof input === "boolean") {
    return input;
  }

  return input === "true";
}
