import { Router } from "express";
import ProductController from "../controller/ProductController";

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post("/", productController.createProduct);

productsRouter.get("/", productController.getAllProducts);

productsRouter.get("/id/:id", productController.getProductById);

productsRouter.get("/name/:name", productController.getProductByName);

export default productsRouter;
