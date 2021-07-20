import { MigrationInterface, QueryRunner } from 'typeorm';

export class SampleMigration1626794632617 implements MigrationInterface {
  name = 'sampleMigration1626794632617'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "samples" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "updated" TIMESTAMP(3) NOT NULL DEFAULT now(),
        "created" TIMESTAMP(3) NOT NULL DEFAULT now(),
        "deleted" TIMESTAMP(3),
        "name" character varying(255) NOT NULL,
        CONSTRAINT "PK_d68b5b3bd25a6851b033fb63444" PRIMARY KEY ("id")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "samples"`);
  }
}
