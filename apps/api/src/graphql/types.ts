import { Business } from '@/business/createBusiness'
import { Logger } from '@keom/toolbox'

export type Context = {
  business: Business
}

export type Server = {
  server: any
  start: () => Promise<void>
  stop: () => Promise<void>
}

export type Options = {
  logger: Logger
  business: Business
  mountPath: string
  enableIntrospection: boolean
  enableDebug: boolean
  keepAliveTimeout: number
  listenAddr: { host: string; port: number }
  typeDefs: string
}
