import { Body, Controller, Get, Post } from '@nestjs/common';
import { LaunchDto } from 'src/common/dto/launch.dto';
import { LaunchService } from './launch.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('launch')
@Controller('launch')
export class LaunchController {
  constructor(private readonly launchService: LaunchService) {}

  @Post()
  sendLauch(@Body() launch: LaunchDto) {
    return this.launchService.create(launch);
  }

  @Get('all')
  getLaunch() {
    return this.launchService.findAll();
  }
}
