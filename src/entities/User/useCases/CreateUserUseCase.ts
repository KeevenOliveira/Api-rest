import { User } from "@prisma/client";
import UsersRepository from "../infra/prisma/repositories/UserRepository";
import AppError from "../../../shared/errors/AppError";

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
      throw new AppError("Já existe usuário com este email", 401);
    }
    const user = await userRepository.create({ email, name, password });

    return user;
  }
}
export default CreateUserService;
