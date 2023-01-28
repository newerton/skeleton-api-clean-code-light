import { Injectable } from '@nestjs/common';

import { ListAllExamplesUseCase } from '@core/example/application/use-cases/example/ListAllExamplesUseCase';

@Injectable()
export class ListAllExampleService {
  constructor(private useCase: ListAllExamplesUseCase) {}

  execute() {
    return this.useCase.execute();
  }
}
