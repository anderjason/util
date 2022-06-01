export function arrayWithRandomOrder<T>(input: T[]): T[] {
  if (input == null) {
    throw new Error("Input is required");
  }

  const result = [...input];

  let currentIndex = result.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const temp = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}
