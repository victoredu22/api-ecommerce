import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  findService() {
    return 'todo en orden';
  }
}
