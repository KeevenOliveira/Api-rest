/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from "express";
import UsersRepository from "../../prisma/repositories/UserRepository";

const usersRouter = Router();

const usersController = new UsersRepository();

usersRouter.get("/", usersController.getAll);

usersRouter.post("/", usersController.create);

usersRouter.get("/email/:email", usersController.findByEmail);

usersRouter.get("/id/:id", usersController.findById);

export default usersRouter;
