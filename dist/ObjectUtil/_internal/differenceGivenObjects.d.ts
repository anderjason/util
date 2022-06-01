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
export declare type PropertyChange = SetPropertyChange | DeletePropertyChange;
export declare function differenceGivenObjects(o1: any, o2: any, parentValuePath?: ValuePath): PropertyChange[];
