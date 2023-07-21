import { gender, skinColors } from "@prisma/client";

export interface User {
  id?: string;
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
  son?: string | unknown;
  country: string;
  state: string;
  city: string;
  address: string;
  numberAddress: number;
  zipCode: string;
}
