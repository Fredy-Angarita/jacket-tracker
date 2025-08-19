import { MigrationInterface, QueryRunner } from "typeorm";

export class FixErrorInEmployeeTable1755630185761 implements MigrationInterface {
    name = 'FixErrorInEmployeeTable1755630185761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_85c5492aef7082f84916aa72083"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "userIdId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "userId" TO "userIdId"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_85c5492aef7082f84916aa72083" FOREIGN KEY ("userIdId") REFERENCES "_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
