import { floatGivenFloatLike } from "./_internal/floatGivenFloatLike";
import { integerGivenIntegerLike } from "./_internal/integerGivenIntegerLike";
import { numberLikeIsIntegerLike } from "./_internal/numberLikeIsIntegerLike";
import { numberWithCycle } from "./_internal/numberWithCycle";
import { numberWithDecimalPlaceLimit } from "./_internal/numberWithDecimalPlaceLimit";
import { numberWithEasing } from "./_internal/numberWithEasing";
import { numberWithHardLimit } from "./_internal/numberWithHardLimit";
import { numberWithRangeMap } from "./_internal/numberWithRangeMap";
import { randomNumberGivenRange } from "./_internal/randomNumberGivenRange";

export class NumberUtil {
  static floatGivenFloatLike = floatGivenFloatLike;
  static integerGivenIntegerLike = integerGivenIntegerLike;
  static numberWithDecimalPlaceLimit = numberWithDecimalPlaceLimit;
  static numberWithEasing = numberWithEasing;
  static numberWithHardLimit = numberWithHardLimit;
  static numberWithRangeMap = numberWithRangeMap;
  static numberWithCycle = numberWithCycle;
  static randomNumberGivenRange = randomNumberGivenRange;
  static numberLikeIsIntegerLike = numberLikeIsIntegerLike;
}
