import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ApiTags } from '@nestjs/swagger';

import { UserDto } from '../users/dto/UserDto.dto';
import { LoginDto } from './dto/Login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() userDto: UserDto) {
    return this.authService.signUp(userDto);
  }

  @Post('login')
  signin(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
