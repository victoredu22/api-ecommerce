import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LaunchDto {
  @ApiProperty({
    example: 'iphone 16',
    description: 'nombre del producto en lanzamiento',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: './assets/images/iphone4.jpg',
    description: 'nombre de la url de la imagen',
  })
  @IsString()
  srcImage: string;

  @ApiProperty({
    example: '2024-09-21',
    description: 'fecha de la imagen',
  })
  dateLaunch: Date;
}
