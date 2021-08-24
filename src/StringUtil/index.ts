import { stringOfRandomCharacters } from "./_internal/stringOfRandomCharacters";
import { stringIsEmpty } from "./_internal/stringIsEmpty";
import { stringWithCase } from "./_internal/stringWithCase";
import { stringWithEachMatchReplaced } from "./_internal/stringWithEachMatchReplaced";
import { stringWithReplacedTokens } from "./_internal/stringWithReplacedTokens";
import { hashCodeGivenString } from "./_internal/hashCodeGivenString";

export class StringUtil {
  static stringIsEmpty = stringIsEmpty;
  static stringOfRandomCharacters = stringOfRandomCharacters;
  static stringWithCase = stringWithCase;
  static stringWithEachMatchReplaced = stringWithEachMatchReplaced;
  static stringWithReplacedTokens = stringWithReplacedTokens;
  static hashCodeGivenString = hashCodeGivenString;
}
