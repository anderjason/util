export function numberLikeIsIntegerLike(input: string | number): boolean {
  if (typeof input === "number") {
    return Number.isInteger(input);
  }

  return Number.isInteger(parseFloat(input));
}
