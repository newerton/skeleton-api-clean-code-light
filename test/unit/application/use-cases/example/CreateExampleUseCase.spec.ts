import { CreateExampleUseCase } from '@core/example/application/use-cases/example/CreateExampleUseCase';
import { ExampleInMemoryRepository } from '@core/example/infrastructure/adapter/persitence/in-memory/ExampleInMemoryRepository';

describe('CreateExampleUseCase Tests', () => {
  it('should create a new example', async () => {
    const repository = new ExampleInMemoryRepository();
    const createUseCase = new CreateExampleUseCase(repository);
    const output = await createUseCase.execute({
      title: 'my title',
    });
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'my title',
    });
  });
});
