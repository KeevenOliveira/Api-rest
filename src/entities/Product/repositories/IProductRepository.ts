/* eslint-disable no-unused-vars */
import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dto/ICreateProductDTO";

export default interface IProductRepository {
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
  create(data: ICreateProductDTO): Promise<Product>;
  getAll(): Promise<Product[]>;
}
