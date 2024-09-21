import { Module } from '@nestjs/common';
import { LaunchController } from './launch.controller';
import { LaunchService } from './launch.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Launch, LaunchSchema } from './entities/launch.entity';

@Module({
  controllers: [LaunchController],
  providers: [LaunchService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Launch.name,
        schema: LaunchSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class LaunchModule {}
