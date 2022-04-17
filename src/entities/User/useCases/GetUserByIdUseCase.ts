import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";

class GetUserByIdUseCase {
  public async execute(id: string): Promise<User> {
    const userRepository = new UsersRepository();

    const user = userRepository.findById(id);

    return user;
  }
}
export default GetUserByIdUseCase;
