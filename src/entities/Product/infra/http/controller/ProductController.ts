import { Request, Response } from "express";
import CreateProductUseCase from "../../../useCases/CreateProductUseCase";
import GetAllProductsUseCase from "../../../useCases/GetAllProductsUseCase";
import GetProductByIdUseCase from "../../../useCases/GetProductByIdUseCase";
import GetProductByNameUseCase from "../../../useCases/GetProductByNameUseCase";
import DeleteProductUseCase from "../../../useCases/DeleteProductByIdUseCase";

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

  public async getProductById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const getProductById = new GetProductByIdUseCase();

      const product = await getProductById.execute(id);

      return response.status(201).json(product);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }

  public async getProductByName(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { name } = request.params;
      const getProductById = new GetProductByNameUseCase();

      const product = await getProductById.execute(name);

      return response.status(201).json(product);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }

  public async deleteProductById(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteProduct = new DeleteProductUseCase();

      const product = await deleteProduct.execute(id);

      return response.status(200).json(product);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }
}
export default ProductController;
