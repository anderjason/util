import { stringWithSpaceCase } from "./stringWithSpaceCase";

export function stringWithOnlyInitialCapital(input: string): string {
  if (input == null) {
    throw new Error("input is required");
  }

  if (input.length === 0) {
    return input;
  }

  const split = stringWithSpaceCase(input);
  return split.charAt(0).toUpperCase() + split.slice(1).toLowerCase();
}
