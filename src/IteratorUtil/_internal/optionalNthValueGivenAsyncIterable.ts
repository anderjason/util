export async function optionalNthValueGivenAsyncIterable<T>(
  asyncIterable: AsyncIterable<T>,
  zeroBasedIndex: number
): Promise<T> {
  if (asyncIterable == null) {
    return undefined;
  }

  if (zeroBasedIndex == null) {
    throw new Error("targetN is required");
  }

  if (zeroBasedIndex < 0) {
    throw new Error("targetN cannot be negative");
  }

  let n: number = 0;

  for await (const item of asyncIterable) {
    if (n == zeroBasedIndex) {
      return item;
    }

    n += 1;
  }

  return undefined;
}
