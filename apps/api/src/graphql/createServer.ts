import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { createContext } from "./context";

import { resolvers } from "./resolvers";

import fs from "node:fs/promises";
import path from "node:path";

import { Context, Server } from "./types";

const graphqSchemaPath =
  process.cwd() + "/node_modules/@keom/graphql/schema.graphql";

export const createServer = async (): Promise<Server> => {
  const schema = await fs.readFile(path.join(graphqSchemaPath), "utf-8");

  const server = new ApolloServer<Context>({
    typeDefs: schema,
    resolvers,
    plugins: [],
  });

  return {
    server,
    start: async () => {
      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: createContext,
      });

      console.log(`🚀  Server ready at: ${url}`);
    },
    stop: async () => {
      await server.stop();
    },
  };
};
