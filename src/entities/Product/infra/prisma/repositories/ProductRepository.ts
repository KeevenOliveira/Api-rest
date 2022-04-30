import { Product } from "@prisma/client";
import { ICreateProductDTO } from "entities/Product/dto/ICreateProductDTO";
import IProductRepository from "entities/Product/repositories/IProductRepository";
import prisma from "../../../../../shared/infra/prisma/client";

import AppError from "../../../../../shared/errors/AppError";

class ProductRepository implements IProductRepository {
  public async createProduct({
    description,
    image,
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        description,
        name,
        price,
        quantity,
        image,
      },
    });
    return product;
  }

  public async findProductById(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new AppError("Não existe produto cadastrado com esse id!", 404);
    }
    return product;
  }

  public async findProductByName(name: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: { name },
    });
    if (!product) {
      throw new AppError("Não existe produto cadastrado com esse nome!", 404);
    }
    return product;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  public async deleteProductById(id: string): Promise<Product> {
    const productDeleted = await prisma.product.delete({
      where: {
        id,
      },
    });

    if (!productDeleted) {
      throw new AppError("Não existe produto cadastrado com esse id!", 404);
    }

    return productDeleted;
  }
}

export default ProductRepository;
