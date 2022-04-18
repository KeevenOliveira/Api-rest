import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";

class DeleteUserUseCase {
  public async execute(id: string): Promise<User> {
    const userRepository = new UsersRepository();

    const userDeleted = await userRepository.deleteUserById(id);

    return userDeleted;
  }
}

export default DeleteUserUseCase;
