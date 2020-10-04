export function floatGivenFloatLike(input: any): number {
  if (input == null) {
    throw new Error("input is required");
  }

  if (typeof input === "number") {
    return input;
  }

  const n = parseFloat(input);
  if (isNaN(n)) {
    throw new Error("input must be float-like");
  }

  return n;
}
