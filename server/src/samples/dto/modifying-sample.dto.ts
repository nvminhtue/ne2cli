import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

import { EntityConstant } from 'src/constants/entity.constant';

export abstract class ModifySampleDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(EntityConstant.ShortLength)
  readonly name: string;
}
