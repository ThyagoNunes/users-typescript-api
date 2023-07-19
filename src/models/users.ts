import { gender, skinColors } from "@prisma/client";

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string | null;
  bornDay?: number | null;
  bornMonth?: number | null;
  bornYear?: number | null;
  age?: number | null;
  height?: number | null;
  color?: skinColors | null;
  sexual?: gender | null;
  father?: string | null;
  mother?: string | null;
  son?: string | unknown | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  address?: string | null;
  numberAddress?: number | null;
  zipCode?: string | null;
}
