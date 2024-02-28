import { QueryResolvers } from "@keom/graphql/src/server";

export const sayHello: QueryResolvers["sayHello"] = () => {
  return "Hello, world!";
};
