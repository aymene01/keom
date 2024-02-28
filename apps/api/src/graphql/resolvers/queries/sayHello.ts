import { QueryResolvers, Response } from '@keom/graphql'
import { Context } from '@/graphql/types'

export const sayHello: QueryResolvers<Context>['sayHello'] = (_parent, _args, ctx): Response => {
  return ctx.business.sayHello()
}
