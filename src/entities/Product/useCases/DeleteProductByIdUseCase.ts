import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";

class DeleteProductUseCase {
  public async execute(id: string): Promise<Product> {
    const productRepository = new ProductRepository();

    const productDeleted = await productRepository.deleteProductById(id);

    return productDeleted;
  }
}

export default DeleteProductUseCase;
