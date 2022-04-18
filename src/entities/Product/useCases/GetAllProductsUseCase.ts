import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";

class GetAllProductsUseCase {
  public async execute(): Promise<Product[]> {
    const productRepository = new ProductRepository();

    const products = await productRepository.getAllProducts();

    return products;
  }
}
export default GetAllProductsUseCase;
