import { CreateExampleUseCase } from '@core/example/application/use-cases/example/CreateExampleUseCase';
import { ListAllExamplesUseCase } from '@core/example/application/use-cases/example/ListAllExamplesUseCase';
import { ExampleInMemoryRepository } from '@core/example/infrastructure/adapter/persitence/in-memory/ExampleInMemoryRepository';

describe('ListAllExamplesUseCase Tests', () => {
  it('should create a new example', async () => {
    const repository = new ExampleInMemoryRepository();
    const createUseCase = new CreateExampleUseCase(repository);
    await createUseCase.execute({ title: 'my title' });

    const listAllUseCase = new ListAllExamplesUseCase(repository);
    const output = await listAllUseCase.execute();
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual([
      {
        id: repository.items[0].id,
        title: repository.items[0].title,
      },
    ]);
  });
});
