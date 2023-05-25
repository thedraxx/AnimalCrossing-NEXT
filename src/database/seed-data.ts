import { IUser } from "@/interface/iUser";
import bcrypt from 'bcryptjs';



interface SeedData {
  users: IUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Francisco Cerrano",
      email: "francisco@google.com",
      passwordHash: bcrypt.hashSync("123456"),
      role: "admin",
    },
    {
      name: "Eduardo Rios",
      email: "eduardo@google.com",
      passwordHash: bcrypt.hashSync("123456"),
      role: "client",
    },
  ],
};
