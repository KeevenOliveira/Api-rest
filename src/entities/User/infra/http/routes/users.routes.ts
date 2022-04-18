/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from "express";
import UsersController from "../controller/UsersController";

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get("/", usersController.getAllUsers);

usersRouter.post("/", usersController.createUser);

usersRouter.get("/email/:email", usersController.getUserByEmail);

usersRouter.get("/id/:id", usersController.getUserById);

export default usersRouter;
