import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUSer(): Promise<User[]> {
    return [
      {
        firstName: "Thyago",
        lastName: "Nunes",
        email: "thyago9293@gmail.com",
        password: "2636235435520",
      },
    ];
  }
}
