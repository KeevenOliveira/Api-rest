import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/settings", (req: Request, res: Response) => {
  res.status(201).json({ message: "Hello World" });
});
