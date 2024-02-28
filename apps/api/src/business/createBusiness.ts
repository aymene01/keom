import { sayHello } from "./domains/sayHello";
import { Options } from "./types";

const createBusiness = (opts: Options) => {
  return {
    sayHello,
  };
};

type Business = ReturnType<typeof createBusiness>;

export { createBusiness, Business };
