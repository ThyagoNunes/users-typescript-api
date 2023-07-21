import { gender, skinColors } from "@prisma/client";
import { User } from "../../models/users";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  bornDay: number;
  bornMonth: number;
  bornYear: number;
  age: number;
  height: number;
  color: skinColors;
  sexual: gender;
  father: string;
  mother: string;
  son?: string | null;
  country: string;
  state: string;
  city: string;
  address: string;
  numberAddress: number;
  zipCode: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
