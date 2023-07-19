import { User } from "../../models/users";
import { /* badRequest */ ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest.params?.id;
      const {
        firstName,
        lastName,
        password,
        /*  username,
        email, */
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
      } = httpRequest.body ?? {};

      const allowedFieldsToUpdate = {
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
      };

      console.log(allowedFieldsToUpdate);

      /*  if (username !== undefined || email !== undefined) {
        return badRequest("Cannot change username or email");
      } */

      const user = await this.updateUserRepository.updateUser(
        id,
        allowedFieldsToUpdate
      );

      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
