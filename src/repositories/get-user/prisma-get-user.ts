import { IGetUserRepository } from "../../controllers/get-user/protocols";
import prisma from "../../database/prisma";
import { User } from "../../models/users";

export class PrismaGetUserRepository implements IGetUserRepository {
  async getUser(id: string): Promise<User | string> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user!;
  }
}
