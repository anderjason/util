import { NumberUtil } from "../..";
import { ValuePath, PathPart } from "../../ValuePath";

export function objectWithoutPath<T>(
  object: T,
  valuePath: PathPart[] | ValuePath
): T {
  if (valuePath == null) {
    throw new Error("Value path is required");
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
    return undefined;
  }

  // shallow clone
  let result: T;
  if (Array.isArray(object)) {
    result = ([...(object as any[])] as unknown) as T;
  } else {
    result = { ...(object as any) };
  }

  // mutate the clone
  let pointer: any = result;
  while (pointer != null && index < length - 1) {
    let key = parts[index];

    if (pointer[key] == null) {
      break;
    }

    if (Array.isArray(pointer[key])) {
      pointer[key] = [...pointer[key]];
    } else {
      pointer[key] = { ...pointer[key] };
    }

    pointer = pointer[key];

    index += 1;
  }

  if (pointer != null) {
    if (Array.isArray(pointer)) {
      const arrayIndex = NumberUtil.integerGivenIntegerLike(parts[index]);
      pointer.splice(arrayIndex, 1);
    } else {
      delete pointer[parts[index]];
    }
  }

  return result;
}
