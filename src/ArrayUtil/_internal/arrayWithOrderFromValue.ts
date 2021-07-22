export type ArrayOrderDirection = "ascending" | "descending";

/**
 * Sorts an array by the return value of a callback invoked on each value.
 *
 * @param input - An array
 * @param getSortableValue - A callback that returns a sortable value, given an array value
 * @param direction - The string "ascending" or "descending"
 * @returns A new array
 *
 * @remarks The input array is not modified by this operation.
 */
export function arrayWithOrderFromValue<T, TV>(
  input: T[],
  getSortableValue: (value: T) => TV,
  direction: ArrayOrderDirection
): T[] {
  const result = [...input];

  if (direction === "descending") {
    result.sort((a, b) => {
      const valueA = getSortableValue(a);
      const valueB = getSortableValue(b);

      if (valueA == null && valueB == null) {
        return 0;
      }

      if (valueA == null) {
        return 1;
      }

      if (valueB == null) {
        return -1;
      }

      const result = String(valueA).localeCompare(String(valueB), undefined, { numeric: true });
      return result * -1;
    });
  } else {
    result.sort((a, b) => {
      const valueA = getSortableValue(a);
      const valueB = getSortableValue(b);

      if (valueA == null && valueB == null) {
        return 0;
      }

      if (valueA == null) {
        return -1;
      }

      if (valueB == null) {
        return 1;
      }

      const result = String(valueA).localeCompare(String(valueB), undefined, { numeric: true });
      return result;
    });
  }

  return result;
}
