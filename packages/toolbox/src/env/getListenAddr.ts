import { getString } from './getString'

export function getListenAddr(key: string, defaultValue: string) {
  const value = getString(key, defaultValue)
  const [host, portStr] = value?.split(':') as string[]

  const port = parseInt(portStr)

  if (isNaN(port)) {
    throw new Error(`Cannot parseInt(${portStr}) for environment variable "${key}"`)
  }

  return { host, port }
}
