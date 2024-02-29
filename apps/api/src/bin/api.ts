import { connectDatabase } from '@keom/db'
import { createBusiness } from '@/business/createBusiness'
import { createServer } from '@/graphql/createServer'
import { waitForSignal, Logger, logger } from '@keom/toolbox'
import fs from 'node:fs/promises'
import * as Env from './env'
import dotenv from 'dotenv'
import { ENV_PATH } from '@/constant/config'

dotenv.config({
  path: ENV_PATH,
})

const main = async (logger: Logger) => {
  const database = connectDatabase({
    logger,
    connectionPoolSize: Env.DATABASE_CONNECTION_POOL_SIZE,
    databaseUrl: Env.DATABASE_URL,
    queryTimeout: Env.DATABASE_QUERY_TIMEOUT,
  })

  const business = createBusiness({
    logger,
    database,
  })

  const server = await createServer({
    logger,
    business,
    enableDebug: Env.GRAPHQL_DEBUG,
    enableIntrospection: Env.GRAPHQL_ENABLE_INTROSPECTION,
    keepAliveTimeout: Env.GRAPHQL_KEEP_ALIVE_TIMEOUT,
    listenAddr: Env.LISTEN_ADDR,
    mountPath: Env.GRAPHQL_MOUNT_PATH,
    typeDefs: await fs.readFile(Env.GRAPHQL_SCHEMA_PATH, 'utf-8'),
  })

  await database.start()
  await server.start()
  await waitForSignal(['SIGINT', 'SIGTERM'])
  await server.stop()
  await database.stop()
}

main(logger('keom-logger')).catch(err => {
  console.log(err)
  process.exit(1)
})
