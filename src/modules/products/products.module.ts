import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/products.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class ProductsModule {}
