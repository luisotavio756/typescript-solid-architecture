import IProduct from "../../../dtos/IProduct";
import IProductsRepository from "../../IProductsRepository";
import Product from "../../../entities/Product";
import sequelize from 'sequelize';

class ProductsRepository implements IProductsRepository {
  public async create({
    image,
    name,
    price,
    stock
  }: IProduct): Promise<Product> {
    const product: Product = // Sequelize create sintax;

    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products: Product[] = // Sequelize find sintax;

    return products;
  }

  public async findOne(id: string): Promise<Product | undefined> {
    const findProduct: Product | undefined = // Sequelize find one sintax;

    return findProduct;
  }

  public async update(product: Product): Promise<Product> {
    const findProduct = this.findOne(product.id);

    Object.assign(findProduct, product);

    const updatedProduct: Product = // Sequelize save object sintax;

    return updatedProduct;
  }

  public async destroy(id: string): Promise<void> {
    await // Sequelize destroy sintax;
  }
}
