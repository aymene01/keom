import { Context, Options } from './types'

export const createContext = async (opts: Options): Promise<Context> => {
  return {
    business: opts.business,
  }
}
