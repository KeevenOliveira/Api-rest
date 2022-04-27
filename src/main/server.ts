import express from "express";
import 'dotenv/config'
import routes from "../shared/infra/http/routes";
import rateLimiter from "../shared/infra/http/middlewares/rateLimiter";

const app = express();

app.use(rateLimiter);
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("Server starting on port 8080 🚀");
});
