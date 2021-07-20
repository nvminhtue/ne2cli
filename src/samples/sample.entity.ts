import { Column, Entity } from 'typeorm';

import { BaseEntity } from 'src/common/base.entity';
import { EntityConstant } from 'src/constants/entity.constant';

@Entity('samples')
export class SampleEntity extends BaseEntity {
  @Column({ type: 'varchar', length: EntityConstant.ShortLength })
  name: string;
}
