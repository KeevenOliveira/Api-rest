import { Request, Response } from "express";
import CreateUserUseCase from "../../../useCases/CreateUserUseCase";
import GetAllUsersUseCase from "../../../useCases/GetAllUsersUseCase";
import GetUserByIdUseCase from "../../../useCases/GetUserByIdUseCase";
import GetUserByEmailUseCase from "../../../useCases/GetUserByEmailUseCase";
import DeleteUserUseCase from "../../../useCases/DeleteUserUseCase";

class UsersController {
  public async createUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      const createUserUseCase = new CreateUserUseCase();
      const user = await createUserUseCase.execute({
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
    } catch (AppError) {
      return response.status(500).json({ AppError: (AppError as AppError).message });
    }
  }

  public async getAllUsers(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const getAllUsersUseCase = new GetAllUsersUseCase();
      const users = await getAllUsersUseCase.execute();
      return response.status(200).json(users);
    } catch (AppError) {
      return response.status(500).json({ AppError: (AppError as AppError).message });
    }
  }

  public async getUserById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const getUserById = new GetUserByIdUseCase();
      const user = await getUserById.execute(id);
      return response.status(200).json(user);
    } catch (AppError) {
      return response.status(404).json({ AppError: (AppError as AppError).message });
    }
  }

  public async getUserByEmail(request: Request, response: Response) {
    try {
      const { email } = request.params;
      const getUserByEmail = new GetUserByEmailUseCase();
      const user = getUserByEmail.execute(email);
      return user;
    } catch (AppError) {
      return response.status(404).json({ AppError: (AppError as AppError).message });
    }
  }

  public async deleteUserById(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deleteUserById = new DeleteUserUseCase();

      const userDeleted = await deleteUserById.execute(id);

      return response.status(200).json(userDeleted);
    } catch (AppError) {
      return response.status(404).json({ AppError: (AppError as AppError).message });
    }
  }
}

export default UsersController;
