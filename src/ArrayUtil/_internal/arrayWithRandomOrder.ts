import { NumberUtil } from "../../NumberUtil";
import { randomNumberSequenceGivenInput } from "../../NumberUtil/_internal/randomNumberGivenInput";

export function arrayWithRandomOrder<T>(input: T[], seed?: number): T[] {
  if (input == null) {
    throw new Error("Input is required");
  }

  const result = [...input];

  let currentIndex = result.length;
  let randomIndex;

  const rand = randomNumberSequenceGivenInput(seed ?? Math.random());

  while (currentIndex != 0) {
    randomIndex = Math.floor(
      NumberUtil.numberWithRangeMap(rand.next().value, 0, 1, 0, currentIndex)
    );

    currentIndex--;

    const temp = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}
