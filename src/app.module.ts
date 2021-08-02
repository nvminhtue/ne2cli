import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { getConnectionOptions } from 'typeorm';

import { AppConstant } from './constants/app.constant';
import { LoggerOption } from './logger/logger.option';
import { QueryLogger } from './logger/query.logger';
import { SampleModule } from './samples/sample.module';

const ModuleList = {
  API: [
    WinstonModule.forRoot(LoggerOption),
    TypeOrmModule.forRootAsync({
      useFactory: async (logger) => ({
        ...await getConnectionOptions(), logger: new QueryLogger(logger),
      }),
      inject: [WINSTON_MODULE_NEST_PROVIDER],
    }),
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
