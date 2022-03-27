/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from "express";
import UsersRepository from "../../prisma/repositories/UserRepository";

const usersRouter = Router();

const usersController = new UsersRepository();

usersRouter.get("/users", usersController.getAll);

usersRouter.post("user", usersController.create);

usersRouter.get("user", usersController.findByEmail);

usersRouter.get("user", usersController.findById);

export default usersRouter;
