export function asyncIterableWithFilter<T>(
  asyncIterable: AsyncIterable<T>,
  filter: (value: T) => boolean | Promise<boolean>
): () => AsyncGenerator<T> {
  async function* result() {
    for await (const item of asyncIterable) {
      const isIncluded = await filter(item);
      if (isIncluded) {
        yield item;
      }
    }
  }

  return result;
}
