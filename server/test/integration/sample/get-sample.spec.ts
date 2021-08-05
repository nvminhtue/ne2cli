import { INestApplication } from '@nestjs/common';
import { expect } from 'chai';
import { v4 } from 'uuid';

import { createSample } from 'src/database/factory/sample.factory';
import { SampleEntity } from 'src/samples/sample.entity';

import { closeApp, formatError, getResponse, initApp } from 'test/helpers/test.helper';

describe('Query specific item of sample entity', () => {
  let app: INestApplication;
  let sample: SampleEntity;

  beforeAll(async (done) => {
    app = await initApp();
    sample = await createSample();

    done();
  })

  afterAll(async (done) => {
    await closeApp(app);

    done();
  })

  describe('Success', () => {
    it('should return sample with given id', async () => {
      const [status, data] = await getResponse(
        app,
        'get',
        `/sample/${sample.id}`,
      )

      expect(status).to.equal(200);
      expect(data.id).to.equal(sample.id);
    })
  })

  describe('Failure', () => {
    it('should return error when id is not id', async () => {
      const [status, res] = await getResponse(
        app,
        'get',
        `/sample/abc`,
      )
      const errors = formatError(2003, 'Not UUID', 'id', null);

      expect(status).to.equal(400);
      expect(res.errors).to.eql(errors);
    })

    it('should return error when id is not exist', async () => {
      const [status, res] = await getResponse(
        app,
        'get',
        `/sample/${v4()}`,
      )
      const errors = formatError(2001, 'Entity not found', 'id', SampleEntity.name);

      expect(status).to.equal(404);
      expect(res.errors).to.eql(errors);
    })
  })
})
