import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmployeeTable1755630009485 implements MigrationInterface {
    name = 'CreateEmployeeTable1755630009485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "lastName" character varying(80) NOT NULL, "phone" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIdId" uuid, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_85c5492aef7082f84916aa72083" FOREIGN KEY ("userIdId") REFERENCES "_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_85c5492aef7082f84916aa72083"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
