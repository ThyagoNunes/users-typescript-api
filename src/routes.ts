import { Router } from "express";
import { GetUserController } from "./controllers/get-user/get-user";
import { GetUsersController } from "./controllers/get-users/get-users";
import { CreateUserController } from "./controllers/create-user/create-user";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";
import { PrismaUpdateRepository } from "./repositories/update-user/prisma-update-user";
import { PrismaGetUserRepository } from "./repositories/get-user/prisma-get-user";
import { PrismaGetUsersRepository } from "./repositories/get-users/prisma-get-users";
import { PrismaCreateUserRepository } from "./repositories/create-user/prisma-create-user";
import { PrismaDeleteUserRepository } from "./repositories/delete-user/prisma-delete-user";

const routes = Router();

routes.get("/users", async (req, res) => {
  const prismaGetUsersRepoository = new PrismaGetUsersRepository();
  const getUsersController = new GetUsersController(prismaGetUsersRepoository);

  const { statusCode, body } = await getUsersController.handle();
  res.status(statusCode).send(body);
});

routes.get("/users/:id", async (req, res) => {
  const prismaGetUserRepository = new PrismaGetUserRepository();
  const getUserController = new GetUserController(prismaGetUserRepository);

  const { body, statusCode } = await getUserController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

routes.post("/users", async (req, res) => {
  const prismaCreateUserRepository = new PrismaCreateUserRepository();

  const createUserController = new CreateUserController(
    prismaCreateUserRepository
  );

  console.log("CREATE USER");

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  console.log("CREATE USER FINAL STEP");
  console.log(`body: ${body}`);
  res.status(statusCode).send(body);
});

routes.patch("/users/:id", async (req, res) => {
  const prismaUpdateUserRepository = new PrismaUpdateRepository();
  const updateUserController = new UpdateUserController(
    prismaUpdateUserRepository
  );

  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).send(body);
});

routes.delete("/users/:id", async (req, res) => {
  const prismaDeleteUserRepository = new PrismaDeleteUserRepository();
  const deleteUserController = new DeleteUserController(
    prismaDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export { routes };
