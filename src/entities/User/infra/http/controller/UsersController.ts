import { Request, Response } from "express";
import CreateUserUseCase from "../../../useCases/CreateUserUseCase";
import GetAllUsersUseCase from "../../../useCases/GetAllUsersUseCase";
import GetUserByIdUseCase from "../../../useCases/GetUserByIdUseCase";
import GetUserByEmailUseCase from "../../../useCases/GetUserByEmailUseCase";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      const createUserService = new CreateUserUseCase();
      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token,
        createdAt: user.createdAt,
      };
      return response.status(200).json(userWithoutPassword);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    try {
      const getAllUsersService = new GetAllUsersUseCase();
      const users = await getAllUsersService.execute();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  public async getUserById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const getUserById = new GetUserByIdUseCase();
      const user = await getUserById.execute(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }

  public async getUserByEmail(request: Request, response: Response) {
    try {
      const { email } = request.params;
      const getUserByEmail = new GetUserByEmailUseCase();
      const user = getUserByEmail.execute(email);
      return user;
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }
}

export default UsersController;
