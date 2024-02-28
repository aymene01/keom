import { connectDatabase } from "@keom/db";
import { createBusiness } from "./business/createBusiness";
import { createServer } from "./graphql/createServer";
import fs from "node:fs/promises";

const main = async () => {
  const database = connectDatabase({
    connectionPoolSize: 10,
    databaseUrl: "postgres://localhost:5432/keom",
    queryTimeout: 1000,
  });

  const business = createBusiness({
    database,
  });

  const server = await createServer({
    business,
    enableDebug: true,
    enableIntrospection: true,
    keepAliveTimeout: 1000,
    listenAddr: { host: "localhost", port: 4000 },
    mountPath: "/graphql",
    typeDefs: await fs.readFile(
      process.cwd() + "/node_modules/@keom/graphql/schema.graphql",
      "utf-8",
    ),
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
