import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exceptions } from 'src/common/exceptions/exceptions';

import { Model } from 'mongoose';

import { Product } from './entities/products.entity';
import { ProductDto } from 'src/common/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(product: ProductDto) {
    try {
      const Product = await this.productModel.create(product);

      return Product;
    } catch (error) {
      return error;
    }
  }
  async findAll() {
    try {
      return await this.productModel.find().exec();
    } catch (error) {
      Exceptions.handleExceptions(error);
    }
  }

  async findOne(nameProduct: string) {
    try {
      const product = await this.productModel
        .findOne({ nameProducts: nameProduct })
        .exec();

      return product;
    } catch (error) {
      Exceptions.handleExceptions(error);
    }
  }
}
