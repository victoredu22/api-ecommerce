import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FilterResponse } from 'src/common/interfaces/filter-response.interface';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/ProductDto.dto';

@ApiTags('products')
@Controller('products')
@ApiBadRequestResponse({
  type: FilterResponse,
  status: HttpStatus.BAD_REQUEST,
  description: 'Bad Request',
})
@ApiInternalServerErrorResponse({
  type: FilterResponse,
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  sendProduct(@Body() product: ProductDto) {
    return this.productService.create(product);
  }

  @Get('all')
  getProduct() {
    return this.productService.findAll();
  }

  @Get(':nameProduct')
  finByName(@Param('nameProduct') nameProduct: string) {
    return this.productService.findOne(nameProduct);
  }
}
