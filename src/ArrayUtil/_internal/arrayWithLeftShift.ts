export function arrayWithLeftShift<T>(input: T[]): T[] {
  let result = [...input];
  if (result.length > 0) {
    result.push(result.shift());
  }
  return result;
}
