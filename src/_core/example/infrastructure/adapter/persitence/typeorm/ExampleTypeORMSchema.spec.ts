import { DataSource } from 'typeorm';

import { Example } from '../../../../domain/entity/example';
import { ExampleTypeORMSchema } from './ExampleTypeORMSchema';

describe('ExampleTypeORMSchema Tests', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [ExampleTypeORMSchema],
    });
    await dataSource.initialize();
    const model = Example.create({
      title: 'my title',
    });
    const modelRepo = dataSource.getRepository(Example);
    await modelRepo.save(model);
    const response = await modelRepo.findOneBy({ id: model.id });
    expect(response.title).toBe('my title');
  });
});
