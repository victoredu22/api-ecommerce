import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { StatusService } from './status.service';
// Importa el guard que has creado
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FilterResponse } from 'src/common/interfaces/filter-response.interface';
import { AuthGuard } from 'src/common/guard/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get()
  @ApiOkResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'status server' })
  findAll() {
    return this.statusService.findService();
  }
}
