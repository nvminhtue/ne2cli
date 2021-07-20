import { Controller, Get } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { PathConstant } from 'src/constants/app.constant'

import { SampleDTO } from './dto/sample.dto';
import { SampleService } from './sample.service';

@Controller(PathConstant.SampleRoute)
export class SampleController {
  constructor(private readonly appService: SampleService) { }

  @Get()
  async getHello(): Promise<SampleDTO> {
    const sample = await this.appService.getSample();
    return plainToClass(SampleDTO, sample);
  }
}
