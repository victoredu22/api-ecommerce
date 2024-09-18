import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'test',
    description: 'name of user',
  })
  username: string;

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
