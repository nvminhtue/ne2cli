import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SampleEntity } from './sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(SampleEntity)
    private sampleRepo: Repository<SampleEntity>,
  ) { }
  async getSample(): Promise<SampleEntity> {
    return await this.sampleRepo.createQueryBuilder().getOne();
  }
}
