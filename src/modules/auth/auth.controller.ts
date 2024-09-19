import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ApiTags } from '@nestjs/swagger';

import { UserDto } from '../users/dto/user.dto';
import { LoginDto } from 'src/modules/auth/dto/login.dto';

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
