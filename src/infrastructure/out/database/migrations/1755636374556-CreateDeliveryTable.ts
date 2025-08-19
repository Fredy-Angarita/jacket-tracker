import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeliveryTable1755636374556 implements MigrationInterface {
    name = 'CreateDeliveryTable1755636374556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "delivery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "observation" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "assignmentId" integer, CONSTRAINT "PK_ffad7bf84e68716cd9af89003b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "FK_a3ee70684ba50fb6fef3df02366" FOREIGN KEY ("assignmentId") REFERENCES "assignment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "FK_a3ee70684ba50fb6fef3df02366"`);
        await queryRunner.query(`DROP TABLE "delivery"`);
    }

}
