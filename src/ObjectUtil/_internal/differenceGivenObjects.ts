import { ValuePath } from "../..";

export interface SetPropertyChange {
  valuePath: ValuePath;
  type: "set";
  newValue: any;
}

export interface DeletePropertyChange {
  valuePath: ValuePath;
  type: "delete";
}

export type PropertyChange = SetPropertyChange | DeletePropertyChange;

/**
 * @return if obj is an Object, including an Array.
 */
function isObject(obj: any) {
  return obj !== null && typeof obj === "object";
}

export function differenceGivenObjects(o1: any, o2: any, parentValuePath: ValuePath = ValuePath.givenParts([])): PropertyChange[] {
  const result: any = [];

  for (const prop in o1) {
    const valuePath = parentValuePath.withRelativeParts([prop]);

    if (o1.hasOwnProperty(prop)) {
      const o2PropValue = o2[prop];
      const o1PropValue = o1[prop];
      if (o2.hasOwnProperty(prop)) {
        if (o2PropValue !== o1PropValue) {
          if (isObject(o1PropValue) && isObject(o2PropValue)) {
            const changes = differenceGivenObjects(o1PropValue, o2PropValue, valuePath);
            for (const change of changes) {
              result.push(change);
            }
          } else {
            result.push({
              valuePath,
              type: "set",
              newValue: o2PropValue
            });
          }
        }
      } else {
        result.push({
          valuePath,
          type: "delete"
        });
      }
    }
  }

  for (const prop in o2) {
    const valuePath = parentValuePath.withRelativeParts([prop]);

    if (o2.hasOwnProperty(prop)) {
      const o2PropValue = o2[prop];

      if (!o1.hasOwnProperty(prop)) {
        result.push({
          valuePath,
          type: "set",
          newValue: o2PropValue
        });
      }
    }
  }

  return result;
}
