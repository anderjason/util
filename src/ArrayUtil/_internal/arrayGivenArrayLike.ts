import { NumberUtil } from "../..";

/**
 * Converts an object that has integer keys to an array. This is useful when an object looks like an array, but isn't actually one.
 *
 * @param input - An array, or an object with integer keys
 * @returns An array, or the original input if the input is not an object or array
 *
 * @remarks This operation does not modify the input.
 */
export function arrayGivenArrayLike(input: any): any {
  if (input == null) {
    return input;
  }

  if (Array.isArray(input)) {
    return input;
  }

  if (typeof input !== "object") {
    return input;
  }

  const everyKeyIsInt = Object.keys(input).every((key) =>
    NumberUtil.numberLikeIsIntegerLike(key)
  );
  if (!everyKeyIsInt || Object.keys(input).length === 0) {
    return input;
  }

  const result: any[] = [];
  Object.keys(input).forEach((key) => {
    result[parseInt(key)] = input[key];
  });

  return result;
}
