import { Example } from '../../../../domain/entity/example';
import { ExampleRepositoryInterface } from '../../../../domain/repository/example.repository.interface';

export class ExampleInMemoryRepository implements ExampleRepositoryInterface {
  items: Example[] = [];
  async insert(model: Example): Promise<void> {
    this.items.push(model);
  }

  async findAll(): Promise<Example[]> {
    return this.items;
  }
}
