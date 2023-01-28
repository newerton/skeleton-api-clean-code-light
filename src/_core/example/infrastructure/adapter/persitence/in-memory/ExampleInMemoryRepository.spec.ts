import { Example, ExampleProperties } from '../../../../domain/entity/example';
import { ExampleInMemoryRepository } from './ExampleInMemoryRepository';

describe('ExampleInMemoryRepository Test', () => {
  it('should insert a new example', async () => {
    const repository = new ExampleInMemoryRepository();
    const modelProps: ExampleProperties = {
      title: 'my title',
    };
    const model = Example.create(modelProps);
    await repository.insert(model);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([model]);
  });
});
