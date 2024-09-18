import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export class Exceptions {
  static handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `error key exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    throw new InternalServerErrorException(`Can't create  - Check server logs`);
  }
}
