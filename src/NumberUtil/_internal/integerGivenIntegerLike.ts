export function integerGivenIntegerLike(input: any): number {
  if (input == null) {
    return undefined;
  }

  if (typeof input === "number") {
    return input;
  }

  return parseInt(input, 10);
}
