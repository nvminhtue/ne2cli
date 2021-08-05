import { IsNotEmpty, IsUUID } from 'class-validator';

import { ModifySampleDTO } from './modifying-sample.dto';

export class UpdateSampleDTO extends ModifySampleDTO {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
