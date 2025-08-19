import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSizeTable1755634190967 implements MigrationInterface {
    name = 'CreateSizeTable1755634190967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clothes_sizes" ("id" SERIAL NOT NULL, "size" character varying(15) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_292d716e36029d04e0aee6c2c4b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clothes_sizes"`);
    }

}
