import { User } from "@prisma/client";
import { ICreateUser } from "../../../dtos/ICreateUserDTO";
// import { IUserDTO } from "../../../dtos/IUserDTO";
// import IUserRepository from "../../../repositories/IUserRepository";
import prisma from "../../../../../shared/infra/prisma/client";

class UsersRepository {
  public async create({ name, password, email }: ICreateUser): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        token: "keeven",
      },
    });
    return user as unknown as User;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user as unknown as User;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user as unknown as User;
  }

  public async getAll(): Promise<User> {
    const users = await prisma.user.findMany();
    return users as unknown as User;
  }
}

export default UsersRepository;
