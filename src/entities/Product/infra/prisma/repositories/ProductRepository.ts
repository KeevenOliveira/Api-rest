import { Product } from "@prisma/client";
import { ICreateProductDTO } from "entities/Product/dto/ICreateProductDTO";
import IProductRepository from "entities/Product/repositories/IProductRepository";
import prisma from "../../../../../shared/infra/prisma/client";

class ProductRepository implements IProductRepository {
  public async create({
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

  public async findById(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error("Não existe produto cadastrado com esse id!");
    }
    return product;
  }

  public async findByName(name: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: { name },
    });
    if (!product) {
      throw new Error("Não existe produto cadastrado com esse nome!");
    }
    return product;
  }

  public async getAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }
}

export default ProductRepository;
