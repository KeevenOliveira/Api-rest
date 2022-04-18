/* eslint-disable object-curly-newline */
import { Request, Response } from "express";
import CreateProductUseCase from "../../../useCases/CreateProductUseCase";
import GetAllProductsUseCase from "../../../useCases/GetAllProductsUseCase";

class ProductController {
  public async createProduct(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { description, name, price, image, quantity } = request.body;

      const createProductUseCase = new CreateProductUseCase();

      const productCreated = await createProductUseCase.execute({
        description,
        image,
        name,
        price,
        quantity,
      });
      return response.status(200).json(productCreated);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }

  public async getAllProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const getAllProducts = new GetAllProductsUseCase();

      const products = await getAllProducts.execute();

      return response.status(201).json(products);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }
}
export default ProductController;
