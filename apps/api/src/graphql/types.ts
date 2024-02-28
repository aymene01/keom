import { ApolloServer } from "@apollo/server";

export type Context = {
  name: string;
  age: number;
};

export type Server = {
  server: ApolloServer<Context>;
  start: () => Promise<void>;
  stop: () => Promise<void>;
};
