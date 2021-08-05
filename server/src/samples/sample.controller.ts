import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { isUUID } from 'class-validator';

import { PathConstant } from 'src/constants/app.constant'
import { ErrorConstant } from 'src/constants/errors.constant'
import { ErrorUtil } from 'src/utils/error.util';

import { CreateSampleDTO } from './dto/create-sample.dto';
import { SampleDTO } from './dto/sample.dto';
import { UpdateSampleDTO } from './dto/update-sample.dto';
import { SampleService } from './sample.service';

@Controller(PathConstant.SampleRoute)
export class SampleController {
  constructor(private readonly appService: SampleService) { }

  @Get()
  getHello(): string {
    return 'HELLO';
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<SampleDTO> {
    if (!isUUID(id)) {
      throw new BadRequestException(
        ErrorUtil.badRequest(
          ErrorConstant.Type.isNotUUID,
          ErrorConstant.Property.Id,
        ),
      );
    }
    const sample = await this.appService.getSample(id);
    return plainToClass(SampleDTO, sample);
  }

  @Post()
  async create(@Body('sample') createSamePleDTO: CreateSampleDTO): Promise<SampleDTO> {
    const sample = await this.appService.create(createSamePleDTO);
    return plainToClass(SampleDTO, sample);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body('sample') updateSamePleDTO: UpdateSampleDTO): Promise<SampleDTO> {
    if (!isUUID(id)) {
      throw new BadRequestException(
        ErrorUtil.badRequest(
          ErrorConstant.Type.isNotUUID,
          ErrorConstant.Property.Id,
        ),
      );
    }
    const sample = await this.appService.update(id, updateSamePleDTO);

    return plainToClass(SampleDTO, sample);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<SampleDTO> {
    if (!isUUID(id)) {
      throw new BadRequestException(
        ErrorUtil.badRequest(
          ErrorConstant.Type.isNotUUID,
          ErrorConstant.Property.Id,
        ),
      );
    }
    const sample = await this.appService.delete(id);

    return plainToClass(SampleDTO, sample);
  }
}
