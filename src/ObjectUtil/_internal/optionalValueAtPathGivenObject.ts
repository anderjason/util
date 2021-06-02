import { ValuePath, PathPart } from "../../ValuePath";

export function optionalValueAtPathGivenObject<T = unknown>(
  object: any,
  valuePath: ValuePath<T> | PathPart[]
): T {
  if (valuePath == null) {
    throw new Error("Value path is required");
  }

  if (object == null) {
    return undefined;
  }

  let index = 0;
  let parts: PathPart[];

  if (Array.isArray(valuePath)) {
    parts = valuePath;
  } else {
    parts = valuePath.toParts();
  }

  let length = parts.length;

  if (length === 0) {
    return object;
  }

  while (object != null && index < length) {
    object = object[parts[index++]];
  }

  return index && index == length ? object : undefined;
}
