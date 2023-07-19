import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "../../controllers/update-user/protocols";
import prisma from "../../database/prisma";
import { User } from "../../models/users";

export class PrismaUpdateRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    const {
      firstName,
      lastName,
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

    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
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

    return updateUser;
  }
}
