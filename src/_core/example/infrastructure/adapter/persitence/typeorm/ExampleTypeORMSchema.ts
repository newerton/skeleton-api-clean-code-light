import { EntitySchema } from 'typeorm/entity-schema/EntitySchema';

import { Example } from '../../../../domain/entity/example';

export const ExampleTypeORMSchema = new EntitySchema<Example>({
  name: 'example',
  target: Example,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    title: {
      type: String,
      length: 255,
    },
  },
});
