import { randomNumberGivenInput } from "./randomNumberGivenInput";

export function randomNumberGivenRange(min: number, max: number, seed: number = Math.random()): number {
  const float = randomNumberGivenInput(seed);

  return min + float * (max - min);
}
