import { Module } from '@nestjs/common';

import { CreateExampleUseCase } from '@core/example/application/use-cases/example/CreateExampleUseCase';
import { ListAllExamplesUseCase } from '@core/example/application/use-cases/example/ListAllExamplesUseCase';
import { ExampleRepositoryInterface } from '@core/example/domain/repository/example.repository.interface';
import { ExampleInMemoryRepository } from '@core/example/infrastructure/adapter/persitence/in-memory/ExampleInMemoryRepository';

import { ExampleController } from './example.controller';
import { CreateExampleService } from './service/create-example.service';
import { ListAllExampleService } from './service/list-all-example.service';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [
    CreateExampleService,
    ListAllExampleService,
    {
      provide: ExampleInMemoryRepository,
      useClass: ExampleInMemoryRepository,
    },
    {
      provide: CreateExampleUseCase,
      useFactory: (repository: ExampleRepositoryInterface) => {
        return new CreateExampleUseCase(repository);
      },
      inject: [ExampleInMemoryRepository],
    },
    {
      provide: ListAllExamplesUseCase,
      useFactory: (repository: ExampleRepositoryInterface) => {
        return new ListAllExamplesUseCase(repository);
      },
      inject: [ExampleInMemoryRepository],
    },
  ],
})
export class ExamplesModule {}
