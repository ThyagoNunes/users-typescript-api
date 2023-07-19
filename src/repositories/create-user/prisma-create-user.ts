import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import prisma from "../../database/prisma";
import { User } from "../../models/users";

export class PrismaCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    console.log(`chegou no repository  ${params.firstName}`);
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      bornDay,
      bornMonth,
      bornYear,
      age,
      height,
      color,
      sexual,
      father,
      mother,
      son,
      country,
      state,
      city,
      address,
      numberAddress,
      zipCode,
    } = params;

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password,
        phone,
        bornDay,
        bornMonth,
        bornYear,
        age,
        height,
        color,
        sexual,
        father,
        mother,
        son,
        country,
        state,
        city,
        address,
        numberAddress,
        zipCode,
      },
    });

    console.log(`newUSer: ${newUser}`);
    console.log("foi pro banco de dados");

    console.log(newUser);
    return newUser;
  }
}

/* 
    const findUserEmail = await prisma.user.findUnique({
      where: {
        email: params.email,
      },
    });

    console.log(`findUserEmail: ${findUserEmail}`);

    const findUserUsername = await prisma.user.findUnique({
      where: {
        username: params.username,
      },
    });
    console.log(`findUserUsername: ${findUserUsername}`);

    if (findUserEmail) {
      throw new Error("This e-mail is already in use");
    }

    if (findUserUsername) {
      throw new Error("This username is already in use");
    }
*/
