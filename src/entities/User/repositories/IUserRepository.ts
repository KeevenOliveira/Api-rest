/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { IUser } from "../dtos/ICreateUserDTO";

export default interface IUserRepository {
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
}
