import { Resolvers } from "@keom/graphql/src/server";

export const resolvers: Resolvers = {
  Query: {
    sayHello: () => ({ message: "Hello, world!" }),
  },
};
