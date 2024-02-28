import { ApolloServer } from "@apollo/server";
import { Business } from "../business/createBusiness";

export type Context = {
  business: Business;
};

export type Server = {
  server: ApolloServer<Context>;
  start: () => Promise<void>;
  stop: () => Promise<void>;
};

export type Options = {
  business: Business;
};
