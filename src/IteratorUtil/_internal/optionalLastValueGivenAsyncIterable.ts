export async function optionalLastValueGivenAsyncIterable<T>(
  asyncIterable: AsyncIterable<T>
): Promise<T> {
  if (asyncIterable == null) {
    return undefined;
  }

  let lastValue: T = undefined;

  for await (const item of asyncIterable) {
    lastValue = item;
  }

  return lastValue;
}
