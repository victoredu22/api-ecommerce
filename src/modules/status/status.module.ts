import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [StatusController],
  providers: [StatusService, AuthGuard],
})
export class StatusModule {}
