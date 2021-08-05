import faker from 'faker';
import { getRepository } from 'typeorm';

import { SampleEntity } from 'src/samples/sample.entity';

export const createSample = async (
  sample: Partial<SampleEntity> = new SampleEntity(),
) => {
  return getRepository(SampleEntity).save({
    name: sample.name || faker.name.firstName()
  });
};
