/**
 * Creates a promise that invokes a callback once for each value in an array.
 *
 * @param array - An array
 * @param fn - An async callback function
 * @returns A promise
 */
export async function asyncSequenceGivenArrayAndCallback<T>(
  array: T[],
  fn: (item: T, idx: number, array: T[]) => Promise<any>
): Promise<void> {
  if (array == null) {
    return;
  }

  const length = array.length;
  for (let index = 0; index < length; index++) {
    await fn(array[index], index, array);
  }
}
