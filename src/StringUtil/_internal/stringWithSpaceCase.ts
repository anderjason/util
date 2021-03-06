import { stringWithNoCase } from "./stringWithNoCase";

export function stringWithSpaceCase(input: string): string {
  if (input == null) {
    throw new Error("input is required");
  }

  return stringWithNoCase(input)
    .replace(/[\W_]+(.|$)/g, (matches: any, match: any) => {
      return match ? " " + match : "";
    })
    .trim();
}
