import { Router } from "express";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";

const routes = Router();

routes.get("/users", async (req, res) => {
  const mongoGetUsersRepoository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepoository);

  const { statusCode, body } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

routes.post("/users", async (req, res) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();

  const createUserController = new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { routes };
