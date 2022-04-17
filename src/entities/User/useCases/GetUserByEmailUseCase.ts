import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";

class GetUserByEmailUseCase {
  public async execute(email: string): Promise<User> {
    const userRepository = new UsersRepository();

    const user = userRepository.findByEmail(email);

    return user;
  }
}

export default GetUserByEmailUseCase;
