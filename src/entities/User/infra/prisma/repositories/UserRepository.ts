/* eslint-disable import/no-unresolved */
import { ICreateUser } from "entities/User/dtos/ICreateUserDTO";
import { IUserDTO } from "entities/User/dtos/IUserDTO";
import IUserRepository from "entities/User/repositories/IUserRepository";
import { PrismaClient } from "@prisma/client";

class UsersRepository implements IUserRepository {
  private prisma = new PrismaClient();

  public async create({
    email,
    name,
    password,
  }: ICreateUser): Promise<IUserDTO> {
    const user = await this.prisma.user.create({
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
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user as unknown as IUserDTO;
  }

  public async findById(id: string): Promise<IUserDTO | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user as unknown as IUserDTO;
  }
}

export default UsersRepository;
