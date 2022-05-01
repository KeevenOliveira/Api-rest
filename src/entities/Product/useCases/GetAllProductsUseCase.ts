import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";
import { getRedis, setRedis } from "../../../config/redisConfig";

class GetAllProductsUseCase {
  public async execute(): Promise<Product[]> {
    const productRepository = new ProductRepository();

    const productsRedis = await getRedis("products"); 

    if(productsRedis){
      return JSON.parse(productsRedis);
    }

    const products = await productRepository.getAllProducts();
    
    await setRedis("products", JSON.stringify(products));

    return products;
  }
}
export default GetAllProductsUseCase;
