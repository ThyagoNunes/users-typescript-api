import validator from "validator";
import { User } from "../../models/users";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserParams,
  ICreateUserController,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      // verificar campos obrigatórios
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        }
      }

      // verificar se o firstName & lastName são validos
      const sizeFirstName = httpRequest.body!.firstName.length;
      const sizeLastName = httpRequest.body!.lastName.length;

      console.log(sizeFirstName);
      console.log(sizeLastName);

      if (sizeFirstName && sizeLastName < 2) {
        return {
          statusCode: 400,
          body: "Min char 2",
        };
      }

      //

      // verificar se o e-mail é válido
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "E-mail is invalid",
        };
      }

      // verificar se a senha é segura
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
        return {
          statusCode: 400,
          body: "Password min length: 8, min number: 1, min simbols: 1, min upperCase: 1",
        };
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
