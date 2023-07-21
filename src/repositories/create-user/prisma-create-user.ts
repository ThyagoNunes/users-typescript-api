import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import prisma from "../../database/prisma";
import { User } from "../../models/users";

export class PrismaCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    const newUser = await prisma.user.create({
      data: params,
    });

    return newUser;
  }
}

/*

 const findUserEmail = await prisma.user.findUnique({
      where: {
        email: params.email,
      },
    });

    const findUserUsername = await prisma.user.findUnique({
      where: {
        username: params.username,
      },
    });

    if (findUserEmail) {
      throw new Error("This e-mail is already in use");
    }

    if (findUserUsername) {
      throw new Error("This username is already in use");
    }
 */
