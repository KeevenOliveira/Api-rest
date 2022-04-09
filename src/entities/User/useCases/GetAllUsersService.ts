import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";

class GetAllUsersService {
  public async getAllUsers(): Promise<[User]> {
    const userRepository = new UsersRepository();

    const users = userRepository.getAll();

    return users;
  }
}

export default GetAllUsersService;
