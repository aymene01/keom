import { Response } from "@keom/graphql";

export const sayHello = (): Response => {
  return {
    message: "Hello, World!",
  };
};
