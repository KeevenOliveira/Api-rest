/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/order
import { PrismaClient } from "@prisma/client";
import { ICreateUser } from "../../../dtos/ICreateUserDTO";
import { IUserDTO } from "../../../dtos/IUserDTO";
import IUserRepository from "../../../repositories/IUserRepository";

class UsersRepository implements IUserRepository {
  public async create({
    body: { name, password, email },
  }: ICreateUser): Promise<IUserDTO> {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        token: "keeven",
      },
    });
    return user as unknown as IUserDTO;
  }

  public async findByEmail(email: string): Promise<IUserDTO | undefined> {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user as unknown as IUserDTO;
  }

  public async findById(id: string): Promise<IUserDTO | undefined> {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user as unknown as IUserDTO;
  }

  public async getAll(): Promise<IUserDTO> {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return users as unknown as IUserDTO;
  }
}

export default UsersRepository;
