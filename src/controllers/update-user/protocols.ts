import { gender, skinColors } from "@prisma/client";
import { User } from "../../models/users";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
  username?: string;
  email?: string;
  phone?: string;
  bornDay?: number;
  bornMonth?: number;
  bornYear?: number;
  age?: number;
  height?: number;
  color?: skinColors;
  sexual?: gender;
  father?: string;
  mother?: string;
  son?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  numberAddress?: number;
  zipCode?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
