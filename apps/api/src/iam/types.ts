import { Database } from '@keom/db'
import { Logger } from '@keom/toolbox'

export type Options = {
  logger: Logger
  database: Database
  jwtSecretKey: string
  // in ms
  jwtDuration: number
}
