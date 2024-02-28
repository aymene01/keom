import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'

import { resolvers } from './resolvers'
import express from 'express'
import http from 'http'

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import { promisify } from 'node:util'
import { Context, Options, Server } from './types'

export const createServer = async (opts: Options): Promise<Server> => {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer<Context>({
    typeDefs: opts.typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(
    opts.mountPath,
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async () => ({
        business: opts.business,
      }),
    }),
  )

  return {
    server,
    start: async () => {
      const {
        listenAddr: { host, port },
        mountPath,
      } = opts
      await new Promise<void>(resolve => {
        httpServer.listen({ port }, resolve)
      })
      console.log(`🚀 Server ready at http://${host}:${port}${mountPath}`)
    },
    stop: async () => {
      await server.stop()
      await promisify(httpServer.close).bind(httpServer)()
    },
  }
}
