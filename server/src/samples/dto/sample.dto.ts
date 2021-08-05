import { Expose } from 'class-transformer';

import { BaseDTO } from 'src/common/base.dto';

export class SampleDTO extends BaseDTO {
  @Expose()
  readonly name: string;
}