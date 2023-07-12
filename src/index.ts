import express from "express";
import { config } from "dotenv";
import { routes } from "./routes";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.use(routes);

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`Listening on port ${port}!`));
};

main();
