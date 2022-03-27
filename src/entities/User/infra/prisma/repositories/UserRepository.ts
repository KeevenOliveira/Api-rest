/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/order
import { PrismaClient } from "@prisma/client";
import { ICreateUser } from "../../../dtos/ICreateUserDTO";
import { IUserDTO } from "../../../dtos/IUserDTO";
import IUserRepository from "../../../repositories/IUserRepository";

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

  public async getAll(): Promise<IUserDTO> {
    console.log("chegou aqui!");
    const users = await this.prisma.user.findMany();

    return users as unknown as IUserDTO;
  }
}

export default UsersRepository;
