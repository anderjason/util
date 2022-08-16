/**
 * Checks if a string is empty or null.
 *
 * @param str - A string
 * @returns True if the string is null, undefined, or has a length of zero; false otherwise.
 */
export function stringIsEmpty(str?: string): boolean {
  return str == null || str.length === 0;
}
