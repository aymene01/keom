import pino, { Logger as LoggerType } from 'pino'
import pretty from 'pino-pretty'

const stream = pretty({
  levelFirst: true,
  colorize: true,
  ignore: 'time,hostname,pid',
})

export const logger = (name: string) =>
  pino(
    {
      name,
      level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    },
    stream,
  )

export type Logger = LoggerType
