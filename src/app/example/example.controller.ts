import { HttpStatus } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common/decorators';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { ErrorSchema } from '@app/@common/documentation/error.schema';
import { JoiValidationPipe } from '@app/@common/pipes/joi-validation.pipe';

import { CreateExampleDto } from './dto/create-example.dto';
import { CreateExampleService } from './service/create-example.service';
import { ListAllExampleService } from './service/list-all-example.service';
import { CreateExampleSchema } from './validations/create-example.schema.validation';

@Controller('example')
@ApiTags('example')
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnprocessableEntityResponse({
  description: 'Unprocessable Entity',
})
export class ExampleController {
  constructor(
    private readonly createExampleService: CreateExampleService,
    private readonly listAllExampleService: ListAllExampleService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateExampleDto })
  @ApiResponse({ status: HttpStatus.CREATED, type: ErrorSchema })
  create(
    @Body(new JoiValidationPipe(new CreateExampleSchema()))
    createRouteDto: CreateExampleDto,
  ) {
    return this.createExampleService.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllExampleService.execute();
  }
}
