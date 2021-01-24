import { asyncSequenceGivenArrayAndCallback } from "./asyncSequenceGivenArrayAndCallback";

/**
 * Creates a promise that returns the first value from an array that matches an async filter function.
 *
 * @param input - An array
 * @param fn - An async filter function that should return true or false
 * @returns A promise of a value or undefined
 */
export async function asyncValueGivenArrayAndFilter<T>(
  input: T[],
  fn: (element: T) => Promise<boolean>
): Promise<T | undefined> {
  let result: T | undefined = undefined;

  await asyncSequenceGivenArrayAndCallback(input, (element) => {
    return fn(element).then((isMatch) => {
      if (isMatch == true && result == null) {
        result = element;
      }
    });
  });

  return result;
}
