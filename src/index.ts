import express from "express";
import { routes } from "./routes";
/* import { MongoClient } from "./database/mongo"; */

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(routes);
};

main();
