/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from "express";
import UsersRepository from "../../prisma/repositories/UserRepository";
import UsersController from "../controller/UsersController";

const usersRouter = Router();

const usersControllerTemp = new UsersRepository();
const usersController = new UsersController();

usersRouter.get("/", usersController.getAll);

usersRouter.post("/", usersController.create);

usersRouter.get("/email/:email", usersControllerTemp.findByEmail);

usersRouter.get("/id/:id", usersControllerTemp.findById);

export default usersRouter;
