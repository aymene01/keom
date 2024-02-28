import { QueryResolvers, Response } from "@keom/graphql";

export const sayHello: QueryResolvers["sayHello"] = (): Response => {
  return {
    message: "Hello, World!",
  };
};
