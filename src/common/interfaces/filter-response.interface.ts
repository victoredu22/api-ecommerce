import { ApiProperty } from '@nestjs/swagger';

import { ApiResponse } from './api-response.interface';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { ErrorException } from './error-exception.interface';

export class FilterResponse implements ApiResponse {
  @ApiProperty()
  @IsString()
  traceId: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsNumber()
  statusCode: number;

  @ApiProperty({ type: ErrorException })
  @IsObject()
  error: ErrorException;
}
