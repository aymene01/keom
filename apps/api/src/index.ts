import { createServer } from "./graphql/createServer";

const main = async () => {
  const server = await createServer();
  await server.start();
};

main();
