/* eslint-disable import/extensions */
import express, { Request, Response } from "express";
import routes from "../shared/infra/http/routes";

const app = express();

app.use(express.json());
app.use(routes);

app.get("test", (req: Request, res: Response) => {
  res.send({ message: "ok" });
});

app.listen(8080, () => {
  console.log("Server starting on port 8080 🚀");
});
