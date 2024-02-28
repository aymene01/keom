import { getString } from './getString'

export function getNumber(key: string, defaultValue: number): number {
  const value = getString(key, `${defaultValue}`)
  const number = parseInt(value)
  if (isNaN(number)) {
    throw new Error(`Cannot parseInt("${value}") for environment variable "${key}"`)
  }
  return number
}
