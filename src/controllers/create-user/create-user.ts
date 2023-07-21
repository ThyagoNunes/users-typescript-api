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

      /* Se mexer no FOR abaixo o c* vai ser rasgado por JIROMBAS CARCERARIAS*/
      for (const field of requiredFields) {
        if (
          !httpRequest?.body?.[
            field as keyof CreateUserParams
          ]?.toLocaleString()
        ) {
          return badRequest(`Field ${field} is required`);
        }
      }

      /*    stoppped here */
      const { firstName, lastName } = httpRequest.body;

      if (firstName.length < 3) {
        return badRequest(
          `Firstname needs min size 3 e não ${firstName.length}: ${firstName}`
        );
      }

      if (lastName.length < 3) {
        return badRequest(
          `Lastname needs min size 3 e não ${lastName.length}: ${lastName}`
        );
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

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return created<User>(user);
    } catch (error) {
      return badRequest("Fudeo papai");
    }
  }
}
