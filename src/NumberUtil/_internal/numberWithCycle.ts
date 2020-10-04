export function numberWithCycle(time: number, cycleLength: number): number {
  let t = (time % cycleLength) / cycleLength;
  if (t < 0.5) {
    return t * 2;
  }

  t -= 0.5;
  return 1 - t * 2;
}
