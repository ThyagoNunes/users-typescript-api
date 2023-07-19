import validator from "validator";
import { User } from "../../models/users";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";
import { badRequest, created } from "../helpers";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      if (!httpRequest.body) {
        return badRequest("Body is requied");
      }
      /* fields are required */
      const requiredFields = [
        "firstName",
        "lastName",
        "username",
        "email",
        "password",
        "phone",
      ];

      /* for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.len) {
          return badRequest(`Field ${field} is required`);
        }
      } */
      if ([httpRequest.body].includes(httpRequest.body))
        console.log(requiredFields);

      // Verify if size first and lastName is valid
      const sizeFirstName = httpRequest.body!.firstName.length;
      const sizeLastName = httpRequest.body!.lastName.length;

      if (sizeFirstName && sizeLastName < 2) {
        return badRequest("Min char 2");
      }
      // Verify if email is secure
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequest("E-mail is invalid");
      }

      // Verify if password is secure
      const passwordIsSafe = validator.isStrongPassword(
        httpRequest.body!.password,
        {
          minLength: 8,
          minNumbers: 1,
          minSymbols: 1,
          minUppercase: 1,
        }
      );

      if (!passwordIsSafe) {
        return badRequest(
          "Password min length: 8, min number: 1, min simbols: 1, min upperCase: 1"
        );
      }

      console.log(
        `foi pro repository usuário: ${httpRequest?.body?.firstName}`
      );

      const user = await this.createUserRepository.createUser(httpRequest.body);

      console.log(`user: ${user}`);
      console.log("retornou do banco");
      return created<User>(user);
    } catch (error) {
      console.log("this inside from catch");
      return badRequest("sexo");
    }
  }
}
