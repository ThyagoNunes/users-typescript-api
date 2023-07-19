import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { User } from "../../models/users";
import prisma from "../../database/prisma";

export class PrismaDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<User> {
    const user = prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const deleted = await prisma.user.delete({
      where: {
        id,
      },
    });

    return deleted;
  }
}
