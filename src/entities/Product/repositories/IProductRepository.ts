/* eslint-disable no-unused-vars */
import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dto/ICreateProductDTO";

export default interface IProductRepository {
  findProductById(id: string): Promise<Product>;
  findProductByName(name: string): Promise<Product>;
  createProduct(data: ICreateProductDTO): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
  deleteProductById(id: string): Promise<Product>;
}
