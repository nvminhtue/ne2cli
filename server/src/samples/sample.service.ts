import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'

// import { ErrorTypesConstant } from 'src/constants/errors.constant'

import { CreateSampleDTO } from './dto/create-sample.dto';
import { UpdateSampleDTO } from './dto/update-sample.dto';
import { SampleEntity } from './sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(SampleEntity)
    private sampleRepo: Repository<SampleEntity>,
  ) { }
  async getSample(id: string): Promise<SampleEntity> {
    const sample: SampleEntity = await this.sampleRepo.createQueryBuilder().where({ id }).getOne();
    if (!sample) {
      throw new EntityNotFoundError(SampleEntity.name, undefined)
    }
    return sample;
  }

  async create(createSampleDTO: CreateSampleDTO): Promise<SampleEntity> {
    const createdSample = await this.sampleRepo.save(createSampleDTO);

    return this.getSample(createdSample.id);
  }

  async update(id: string, updateSampleDTO: UpdateSampleDTO): Promise<SampleEntity> {
    await this.getSample(id)
    await this.sampleRepo.update(id, updateSampleDTO);

    return this.getSample(id);
  }

  async delete(id: string): Promise<SampleEntity> {
    const softDeletedSample = await this.getSample(id)
    await this.sampleRepo.softDelete(id);

    return softDeletedSample;
  }
}
