export function booleanGivenBooleanLike(input: any): boolean {
  if (input == null) {
    return undefined;
  }

  if (typeof input === "boolean") {
    return input;
  }

  return input === "true";
}
