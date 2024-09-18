import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsNumber, IsDate } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    example: 'iphone 14 pro',
    description: 'nombre del celular',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'http://algo.cl/almecenamiento',
    description: 'url donde se encuentra la imagen',
  })
  @IsString()
  srcImage: string;

  @ApiProperty({
    example: 'iphone 13',
    description: 'marca del telefono',
  })
  @IsString()
  brand: string;

  @ApiProperty({
    example: 'iphone 13 blanco',
    description: 'caracteristica del telefono',
  })
  @IsString()
  characteristics: string;

  @ApiProperty({
    example: 'celular 20 mp',
    description: 'una breve descripcion del telefono',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: '20000',
    description: 'valor total',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: '99',
    description: 'stock del telefono',
  })
  @IsInt()
  stock: number;
}
