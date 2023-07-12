import { Router } from "express";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

const routes = Router();

routes.get("/users", async (req, res) => {
  const mongoGetUsersRepoository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepoository);

  const { statusCode, body } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

export { routes };
