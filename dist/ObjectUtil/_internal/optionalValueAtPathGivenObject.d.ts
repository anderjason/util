import { ValuePath, PathPart } from "../../ValuePath";
export declare function optionalValueAtPathGivenObject<T = unknown>(object: any, valuePath: ValuePath<T> | PathPart[]): T;
