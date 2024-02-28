import { getEnum } from './getEnum'

export function getBoolean(key: string, defaultValue: boolean) {
  const value = getEnum(key, ['true', 'false'], `${defaultValue}`)
  return value === 'true'
}
