import { User } from "../../models/users";
import { badRequest, ok } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetUserRepository } from "./protocols";

export class GetUserController implements IController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest!.params!.id;

      const user = await this.getUserRepository.getUser(id);

      return ok<User>(user);
    } catch (error) {
      return badRequest("User not found");
    }
  }
}
