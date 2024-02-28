import { Resolvers } from '@keom/graphql'

import * as queries from './queries'

export const resolvers: Resolvers = {
  Query: {
    sayHello: queries.sayHello,
  },
}
