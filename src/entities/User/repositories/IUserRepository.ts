/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { User } from "@prisma/client";
import { ICreateUser } from "../dtos/ICreateUserDTO";

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUser): Promise<User>;
  getAll(): Promise<User[]>;
}
