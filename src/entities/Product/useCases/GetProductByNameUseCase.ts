import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";

class GetProductByNameUseCase {
  public async execute(name: string): Promise<Product> {
    const productRepository = new ProductRepository();

    const product = productRepository.findProductByName(name);

    return product;
  }
}

export default GetProductByNameUseCase;
