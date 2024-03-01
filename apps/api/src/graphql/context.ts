import { ExpressContext } from 'apollo-server-express'
import { Context, Options } from './types'

export const createContext = async (opts: Options, ctx: ExpressContext): Promise<Context> => {
  return {
    business: opts.business,
  }
}
