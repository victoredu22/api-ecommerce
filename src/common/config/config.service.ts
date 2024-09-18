import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigLoggerService {
  constructor(private readonly configService: ConfigService) {
    console.log('JWT_SECRET:', this.configService.get<string>('JWT_SECRET'));
  }
}
