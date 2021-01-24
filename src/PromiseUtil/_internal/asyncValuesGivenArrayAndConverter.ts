import { asyncSequenceGivenArrayAndCallback } from "./asyncSequenceGivenArrayAndCallback";

/**
 * Creates a promise of an array of values returned from an async map function
 *
 * @param input - An array
 * @param fn - An async map function
 * @returns A promise of an array
 */
export function asyncValuesGivenArrayAndConverter<T, R>(
  input: T[],
  fn: (element: T, idx: number) => Promise<R>
): Promise<R[]> {
  const result: R[] = [];

  return asyncSequenceGivenArrayAndCallback(input, (element, idx) => {
    return fn(element, idx).then((elementResult) => {
      result.push(elementResult);
    });
  }).then(() => {
    return result;
  });
}
