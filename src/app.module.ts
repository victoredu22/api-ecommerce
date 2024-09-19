import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusModule } from './modules/status/status.module';
import { StatusController } from './modules/status/status.controller';
import { StatusService } from './modules/status/status.service';

import { ConfigModule } from '@nestjs/config';

import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductsController } from './modules/products/products.controller';
import { ProductsService } from './modules/products/products.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb://mongo:sIfEWdPAJjrEyQKnbsjlcvyweKTkTAqU@autorack.proxy.rlwy.net:13119',
      {
        dbName: 'eccommerce',
      },
    ),

    StatusModule,
    ProductsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [StatusController, ProductsController],
  providers: [StatusService, ProductsService, JwtService],
})
export class AppModule {}
