import IProduct from "../../../dtos/IProduct";
import IProductsRepository from "../../IProductsRepository";
import Product from "../../../entities/Product";
import typeorm from 'typeorm';

class ProductsRepository implements IProductsRepository {
  public async create({
    image,
    name,
    price,
    stock
  }: IProduct): Promise<Product> {
    const product: Product = // TypeORM create sintax;

    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products: Product[] = // TypeORM find sintax;

    return products;
  }

  public async findOne(id: string): Promise<Product | undefined> {
    const findProduct: Product | undefined = // TypeORM find one sintax;

    return findProduct;
  }

  public async update(product: Product): Promise<Product> {
    const findProduct = this.findOne(product.id);

    Object.assign(findProduct, product);

    const updatedProduct: Product = // TypeORM save object sintax;

    return updatedProduct;
  }

  public async destroy(id: string): Promise<void> {
    await // TypeORM destroy sintax;
  }
}
