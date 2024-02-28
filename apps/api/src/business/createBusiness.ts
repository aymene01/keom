import { sayHello } from "./domains/sayHello";

const createBusiness = () => {
  return {
    sayHello,
  };
};

type Business = ReturnType<typeof createBusiness>;

export { createBusiness, Business };
