export function arrayWithRightShift<T>(input: T[]): T[] {
  let result = [...input];
  if (result.length > 0) {
    result.unshift(result.pop());
  }
  return result;
}
