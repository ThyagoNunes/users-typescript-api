import { gender, skinColors } from "@prisma/client";
import { User } from "../../models/users";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
  /* username?: string;
  email?: string; */
  phone?: string;
  bornDay?: number | null;
  bornMonth?: number | null;
  bornYear?: number | null;
  age?: number | null;
  height?: number | null;
  color?: skinColors | null;
  sexual?: gender | null;
  father?: string | null;
  mother?: string | null;
  son?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  address?: string | null;
  numberAddress?: number | null;
  zipCode?: string | null;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
