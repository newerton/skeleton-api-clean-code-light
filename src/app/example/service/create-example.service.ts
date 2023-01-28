import { Injectable } from '@nestjs/common';

import { CreateExampleUseCase } from '@core/example/application/use-cases/example/CreateExampleUseCase';

import { CreateExampleDto } from '../dto/create-example.dto';

@Injectable()
export class CreateExampleService {
  constructor(private createUseCase: CreateExampleUseCase) {}

  execute(input: CreateExampleDto) {
    return this.createUseCase.execute(input);
  }
}
