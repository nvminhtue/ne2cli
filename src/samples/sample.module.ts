import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleController } from './sample.controller';
import { SampleEntity } from './sample.entity';
import { SampleService } from './sample.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SampleEntity,
    ])
  ],
  controllers: [SampleController],
  providers: [SampleService],
  exports: [SampleService]
})
export class SampleModule { }
