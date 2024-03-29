import { IamService } from '@/iam/createIamService'
import { Database } from '@keom/db'
import { Logger } from '@keom/toolbox'

export type Options = {
  logger: Logger
  database: Database
  iamService: IamService
}
