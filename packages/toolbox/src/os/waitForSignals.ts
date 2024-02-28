type Signal = 'SIGINT' | 'SIGTERM'

export const waitForSignal = (signal: Signal[]) => {
  return new Promise<void>(resolve => {
    signal.forEach(signal => {
      process.on(signal, () => {
        resolve()
      })
    })
  })
}
