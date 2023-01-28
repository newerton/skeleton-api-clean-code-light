import { Example } from '../entity/example';

export interface ExampleRepositoryInterface {
  insert(Example: Example): Promise<void>;
  findAll(): Promise<Example[]>;
}
