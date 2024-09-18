import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusModule } from './modules/status/status.module';
import { StatusController } from './modules/status/status.controller';
import { StatusService } from './modules/status/status.service';
import { ProductsController } from './modules/products/products/products.controller';
import { ProductsModule } from './modules/products/products/products.module';
import { ProductsService } from './modules/products/products/products.service';

import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    StatusModule,
    ProductsModule,
    UsersModule,
  ],
  controllers: [StatusController, ProductsController],
  providers: [StatusService, ProductsService],
})
export class AppModule {}
