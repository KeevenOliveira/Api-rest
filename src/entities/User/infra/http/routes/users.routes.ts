/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from "express";
import UsersController from "../controller/UsersController";
import rateLimiter from "../../../../../shared/infra/http/middlewares/rateLimiter";

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.use(rateLimiter);

usersRouter.get("/", usersController.getAllUsers);

usersRouter.post("/", usersController.createUser);

usersRouter.get("/email/:email", usersController.getUserByEmail);

usersRouter.get("/id/:id", usersController.getUserById);

usersRouter.delete("/id/:id", usersController.deleteUserById);

export default usersRouter;
