import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";
import { ICreateProductDTO } from "../dto/ICreateProductDTO";
import { setRedis } from "../../../config/redisConfig";

class CreateProductUseCase {
  public async execute({
    description,
    image,
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    await setRedis("products" , "");
    const productRepository = new ProductRepository();
    const productCreated = await productRepository.createProduct({
      description,
      image,
      name,
      price,
      quantity,
    });
    return productCreated;
  }
}

export default CreateProductUseCase;
