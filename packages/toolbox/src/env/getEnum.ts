import { getString } from './getString'
import { invert } from 'lodash'

export function getEnum(key: string, values: string[], defaultValue: string) {
  const value = getString(key, defaultValue)
  const strValues = invert(values)
  if (strValues[value] === void 0) {
    throw new Error(`value ${value} for variable ${key} is not valid, valid values are ${Object.keys(strValues)}`)
  }
  return value
}
