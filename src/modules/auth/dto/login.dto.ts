import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'email of user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '******',
    description: 'password of user',
  })
  @IsString()
  @MinLength(6)
  password: string;
}
