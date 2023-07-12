import express from "express";
import { config } from "dotenv";
import { routes } from "./routes";

config();
const app = express();

const port = process.env.PORT || 8000;

app.use(routes);
app.listen(port, () => console.log(`Listening on port ${port}!`));
