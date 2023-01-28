import { Repository } from 'typeorm';

import { Example } from '../../../../domain/entity/example';
import { ExampleRepositoryInterface } from '../../../../domain/repository/example.repository.interface';

export class ExampleTypeOrmRepository implements ExampleRepositoryInterface {
  constructor(private repository: Repository<Example>) {}

  async insert(model: Example): Promise<void> {
    await this.repository.save(model);
  }

  findAll(): Promise<Example[]> {
    return this.repository.find();
  }
}
