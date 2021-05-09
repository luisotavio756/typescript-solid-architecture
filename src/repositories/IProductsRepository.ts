import Product from '../entities/Product';
import IProduct from '../dtos/IProduct';

interface IProductsRepository {
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product | undefined>;
  create(data: IProduct): Promise<Product>;
  update(product: Product): Promise<Product>;
  destroy(id: string): Promise<void>;
}

export default IProductsRepository;
