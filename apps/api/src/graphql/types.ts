import { ApolloServer } from "@apollo/server";
import { Business } from "../business/createBusiness";

export type Context = {
  business: Business;
};

export type Server = {
  server: any;
  start: () => Promise<void>;
  stop: () => Promise<void>;
};

export type Options = {
  business: Business;
  mountPath: string;
  enableIntrospection: boolean;
  enableDebug: boolean;
  keepAliveTimeout: number;
  listenAddr: { host: string; port: number };
  typeDefs: string;
};
