import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = new UsersRepository();
    const userAlreadyExists = await userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error();
    }
    const user = await userRepository.create({ email, name, password });

    return user;
  }
}
export default CreateUserService;
