/* eslint-disable import/no-unresolved */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { Request, response } from "express";
import { ICreateUser } from "../dtos/ICreateUserDTO";
import { IUserDTO } from "../dtos/IUserDTO";

export default interface IUserRepository {
  findById(id: string): Promise<IUserDTO | undefined>;
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  create(data: ICreateUser): Promise<IUserDTO>;
  getAll(): Promise<IUserDTO>;
}
