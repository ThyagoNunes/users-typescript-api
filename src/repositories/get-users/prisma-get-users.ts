import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import prisma from "../../database/prisma";
import { User } from "../../models/users";

export class PrismaGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany({});
  }
}
