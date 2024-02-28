import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./resolvers";

import fs from "node:fs/promises";
import path from "node:path";

import { Context } from "./context";

type Server = {
  server: ApolloServer<Context>;
  start: () => Promise<void>;
  stop: () => Promise<void>;
};

export const createServer = async (): Promise<Server> => {
  const schema = await fs.readFile(
    path.join(process.cwd(), "node_modules/@keom/graphql/schema.graphql"),
    "utf-8",
  );

  const server = new ApolloServer<Context>({
    typeDefs: schema,
    resolvers,
  });

  return {
    server,
    start: async () => {
      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async () => ({ name: "John", age: 30 }),
      });

      console.log(`🚀  Server ready at: ${url}`);
    },
    stop: async () => {
      await server.stop();
    },
  };
};
