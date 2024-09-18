import { Controller, Get, HttpStatus } from '@nestjs/common';
import { StatusService } from './status.service';
import {
  ApiBadRequestResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FilterResponse } from 'src/common/interfaces/filter-response.interface';

@ApiTags('status')
@Controller('status')
@ApiBadRequestResponse({
  type: FilterResponse,
  status: HttpStatus.BAD_REQUEST,
  description: 'Bad Request',
})
@ApiInternalServerErrorResponse({
  type: FilterResponse,
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  @ApiOkResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'status server' })
  findAll() {
    return this.statusService.findService();
  }
}
