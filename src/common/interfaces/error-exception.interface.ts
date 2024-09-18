import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ErrorException {
  @ApiProperty()
  @IsString()
  domain: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  origin: string;
}
