import { Example } from '../../../domain/entity/example';
import { ExampleRepositoryInterface } from '../../../domain/repository/example.repository.interface';

export class CreateExampleUseCase {
  constructor(private repository: ExampleRepositoryInterface) {}

  async execute(input: CreateExampleInput): Promise<CreateExampleOutput> {
    const model = Example.create(input);
    await this.repository.insert(model);
    return model.toJSON();
  }
}

type CreateExampleInput = {
  title: string;
};

type CreateExampleOutput = {
  id: string;
  title: string;
};
