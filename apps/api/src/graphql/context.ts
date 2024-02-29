import { Context, Options } from './types'
import { ExpressContext } from 'apollo-server-express'

export const createContext = async (opts: Options, ctx: ExpressContext): Promise<Context> => {
  return {
    business: opts.business,
  }
}
