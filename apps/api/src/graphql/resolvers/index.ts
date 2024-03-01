import * as queries from './queries'
import { Resolvers } from '@keom/graphql'

export const resolvers: Resolvers = {
  Query: {
    sayHello: queries.sayHello,
  },
}
