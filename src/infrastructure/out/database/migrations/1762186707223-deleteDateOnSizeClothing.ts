import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteDateOnSizeClothing1762186707223 implements MigrationInterface {
    name = 'DeleteDateOnSizeClothing1762186707223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clothes_sizes" DROP COLUMN "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clothes_sizes" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
