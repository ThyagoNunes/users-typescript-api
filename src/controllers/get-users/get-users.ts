import { User } from "../../models/users";
import { serverError, ok } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      // validar requisição
      // direcionar chamada para o Repository
      const users = await this.getUsersRepository.getUSer();

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
