import { ExampleRepositoryInterface } from '../../../domain/repository/example.repository.interface';

export class ListAllExamplesUseCase {
  constructor(private repository: ExampleRepositoryInterface) {}

  async execute(): Promise<ListAllExamplesOutput[]> {
    const models = await this.repository.findAll();
    return models.map((r) => r.toJSON());
  }
}

type ListAllExamplesOutput = {
  id: string;
  title: string;
};
