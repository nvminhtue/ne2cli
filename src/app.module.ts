import { Module } from '@nestjs/common';

import { SampleModule } from './samples/sample.module';
import { AppConstant } from './constants/app.constant';
import { TypeOrmModule } from '@nestjs/typeorm';

const ModuleList = {
  API: [
    TypeOrmModule.forRoot(),
    SampleModule,
  ]
}

function imports() {
  if (process.env.NODE_ENV === AppConstant.DevEnv) {
    return ModuleList.API
  }
}

@Module({
  imports: imports(),
})
export class AppModule { }
