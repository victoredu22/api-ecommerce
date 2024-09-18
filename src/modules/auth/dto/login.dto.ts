import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'email of user',
  })
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'password of user',
  })
  password: string;
}
