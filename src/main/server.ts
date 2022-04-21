import express from "express";
import routes from "../shared/infra/http/routes";
// import usersRouter from "../entities/User/infra/http/routes/users.routes";
import rateLimiter from "../shared/infra/http/middlewares/rateLimiter";

const app = express();

app.use(rateLimiter);
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("Server starting on port 8080 🚀");
});
