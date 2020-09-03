import { asyncDelayOfForever } from "./_internal/asyncDelayOfForever";
import { asyncSequenceGivenArrayAndCallback } from "./_internal/asyncSequenceGivenArrayAndCallback";
import { asyncSequenceGivenCountAndCallback } from "./_internal/asyncSequenceGivenCountAndCallback";
import { asyncValueGivenArrayAndFilter } from "./_internal/asyncValueGivenArrayAndFilter";
import { asyncValuesGivenArrayAndConverter } from "./_internal/asyncValuesGivenArrayAndConverter";

export class PromiseUtil {
  static asyncDelayOfForever = asyncDelayOfForever;
  static asyncSequenceGivenArrayAndCallback = asyncSequenceGivenArrayAndCallback;
  static asyncSequenceGivenCountAndCallback = asyncSequenceGivenCountAndCallback;
  static asyncValueGivenArrayAndFilter = asyncValueGivenArrayAndFilter;
  static asyncValuesGivenArrayAndConverter = asyncValuesGivenArrayAndConverter;
}
