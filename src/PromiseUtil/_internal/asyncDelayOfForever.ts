export function asyncDelayOfForever(): Promise<void> {
  // promise never resolves

  return new Promise(() => {
    // need to keep a setInterval in the event loop because
    // otherwise the process might eventually exit

    setInterval(Function.prototype, 600000); // do nothing every 10 minutes
  });
}
