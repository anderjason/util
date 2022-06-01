interface CallbackResult<T> {
  value: T;
  isDone: boolean;
}

export function asyncIterableGivenCallback<T>(
  fn: (i: number, previousValue?: T) => Promise<CallbackResult<T>>
): () => AsyncGenerator<T> {
  async function* result() {
    let isDone: boolean = false;
    let i = 0;
    let previousValue: T = undefined;

    while (!isDone) {
      const result = await fn(i, previousValue);

      isDone = result.isDone;
      previousValue = result.value;

      yield result.value;

      i += 1;
    }
  }

  return result;
}
