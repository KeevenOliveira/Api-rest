import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";

class GetProductByIdUseCase {
  public async execute(id: string): Promise<Product> {
    const productRepository = new ProductRepository();

    const product = productRepository.findById(id);

    return product;
  }
}

export default GetProductByIdUseCase;
