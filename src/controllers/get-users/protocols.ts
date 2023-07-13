import { User } from "../../models/users";

export interface IGetUsersRepository {
  getUSer(): Promise<User[]>;
}
