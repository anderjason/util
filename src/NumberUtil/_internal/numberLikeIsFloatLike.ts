export function numberLikeIsFloatLike(input: string | number): boolean {
  if (typeof input === "number") {
    return !Number.isInteger(input);
  }

  const n = parseFloat(input);
  if (isNaN(n)) {
    return false;
  }

  return !Number.isInteger(n);
}
