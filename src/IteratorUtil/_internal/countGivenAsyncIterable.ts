export async function countGivenAsyncIterable<T>(
  asyncIterable: AsyncIterable<T>
): Promise<number> {
  let result: number = 0;

  for await (const item of asyncIterable) {
    result += 1;
  }

  return result;
}
