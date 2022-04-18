import { Router } from "express";
import ProductController from "../controller/ProductController";

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post("/", productController.createProduct);

productsRouter.get("/", productController.getAllProducts);

export default productsRouter;
