import { Router } from "express";

import usersRouter from "../../../../entities/User/infra/http/routes/users.routes";
import productsRouter from "../../../../entities/Product/infra/http/routes/products.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/products", productsRouter);

export default routes;
