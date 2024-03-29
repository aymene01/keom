import { PrismaClient } from '@prisma/client'
import { Logger } from '@keom/toolbox'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

type DatabaseOption = {
  logger: Logger
  databaseUrl: string
  connectionPoolSize: number
  queryTimeout: number
}

export function connectDatabase(opts: DatabaseOption) {
  const url = new URL(opts.databaseUrl)

  url.searchParams.append('connection_limit', `${opts.connectionPoolSize}`)
  url.searchParams.append('pool_timeout', `${opts.queryTimeout}`)

  const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      datasources: {
        db: {
          url: url.href,
        },
      },
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

  return {
    prisma,
    start: async () => {
      await prisma.$connect()
      opts.logger.info('🔌 Successfully connected to the database.')
    },
    stop: async () => {
      await prisma.$disconnect()
    },
  }
}

export type Database = Awaited<ReturnType<typeof connectDatabase>>
