/* eslint-disable no-unused-vars */
import { User } from "@prisma/client";
import { ICreateUser } from "../dtos/ICreateUserDTO";

export default interface IUserRepository {
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUser): Promise<User>;
  getAll(): Promise<User[]>;
  deleteUserById(id: string): Promise<User>;
}
