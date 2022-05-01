import { Product } from "@prisma/client";
import ProductRepository from "../infra/prisma/repositories/ProductRepository";
import { getRedis, setRedis } from "../../../config/redisConfig";

class GetAllProductsUseCase {
  public async execute(): Promise<Product[]> {
    const productRepository = new ProductRepository();

    console.time();
    const productsRedis = await getRedis("products"); 

    if(productsRedis){
      console.log("teste com redis");
      console.timeEnd();
      return JSON.parse(productsRedis);
    }
    // console.time();

    const products = await productRepository.getAllProducts();
    
    await setRedis("products", JSON.stringify(products)); 
    // console.log("teste sem redis");
    // console.timeEnd();

    return products;
  }
}
export default GetAllProductsUseCase;
