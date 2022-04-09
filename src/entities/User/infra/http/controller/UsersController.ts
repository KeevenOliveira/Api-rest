import { Request, Response } from "express";
import CreateUserService from "../../../useCases/CreateUserService";
import GetAllUsersService from "../../../useCases/getAllUsersService";
class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      const createUserService = new CreateUserService();
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
      const getAllUsersService = new GetAllUsersService();
      const users = await getAllUsersService.getAllUsers();
      response.status(200).json(users);
    } catch (error) {
      response.status(400).json({ error: (error as Error).message });
    }
  }
}

export default UsersController;
