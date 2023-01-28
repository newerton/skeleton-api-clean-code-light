import { DataSource } from 'typeorm';

import { Example, ExampleProperties } from '../../../../domain/entity/example';
import { ExampleTypeOrmRepository } from './ExampleTypeORMRepository';
import { ExampleTypeORMSchema } from './ExampleTypeORMSchema';

describe('ExampleTypeORMRepository Test', () => {
  it('should insert a new model', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [ExampleTypeORMSchema],
    });
    await dataSource.initialize();

    const ormRepository = dataSource.getRepository(Example);
    const repository = new ExampleTypeOrmRepository(ormRepository);
    const modelProps: ExampleProperties = {
      title: 'my title',
    };
    const model = Example.create(modelProps);
    await repository.insert(model);

    const modelFound = await ormRepository.findOneBy({ id: model.id });
    expect(modelFound.toJSON()).toStrictEqual(model.toJSON());
  });
});
