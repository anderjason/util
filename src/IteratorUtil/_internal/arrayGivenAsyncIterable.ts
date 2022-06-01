export async function arrayGivenAsyncIterable<T>(
  asyncIterable: AsyncIterable<T>,
  limit?: number
): Promise<T[]> {
  const result: T[] = [];

  let i = 0;
  for await (const item of asyncIterable) {
    result.push(item);
    i++;

    if (limit != null && i >= limit) {
      break;
    }
  }

  return result;
}
