import { User } from "@prisma/client";
import { ICreateUser } from "../../../dtos/ICreateUserDTO";
import prisma from "../../../../../shared/infra/prisma/client";
import IUserRepository from "../../../repositories/IUserRepository";

class UsersRepository implements IUserRepository {
  public async create({ name, password, email }: ICreateUser): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        token: "keeven",
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error("Não existe usuário cadastrado com este email!");
    }
    return user;
  }

  public async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("Não existe usuário com este id!");
    }

    return user;
  }

  public async getAll(): Promise<[User]> {
    const users = await prisma.user.findMany();
    return users as [User];
  }

  public async deleteUserById(id: string): Promise<User> {
    const user = await prisma.user.delete({
      where: { id },
    });
    if (!user) {
      throw new Error("Não existe usuário cadastrado com esse Id!");
    }
    return user;
  }
}

export default UsersRepository;
