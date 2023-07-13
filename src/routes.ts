import { Router } from "express";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";
import { MongoUpdateRepository } from "./repositories/update-user/mongo-update-user";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { MongoDeleteUserRepository } from "./repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";
import { MongoGetUserRepository } from "./repositories/get-user/mongo-get-user";
import { GetUserController } from "./controllers/get-user/get-user";

const routes = Router();

routes.get("/users", async (req, res) => {
  const mongoGetUsersRepoository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepoository);

  const { statusCode, body } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

routes.get("/users/:id", async (req, res) => {
  const mongoGetUserRepository = new MongoGetUserRepository();
  const getUserController = new GetUserController(mongoGetUserRepository);

  const { body, statusCode } = await getUserController.handle({
    params: req.params,
  });

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

routes.patch("/users/:id", async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateRepository();
  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );

  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).send(body);
});

routes.delete("/users/:id", async (req, res) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository();
  const deleteUserController = new DeleteUserController(
    mongoDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export { routes };
