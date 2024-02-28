import { createBusiness } from "./business/createBusiness";
import { createServer } from "./graphql/createServer";

const main = async () => {
  const business = createBusiness();

  const server = await createServer({
    business,
  });

  await server.start();
  await waitForSignal();
  await server.stop();
};

const waitForSignal = async () => {
  return new Promise((resolve) => {
    process.on("SIGINT", resolve);
    process.on("SIGTERM", resolve);
  });
};

main();
