import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssignmentsTable1755635145040 implements MigrationInterface {
    name = 'CreateAssignmentsTable1755635145040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assignment" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "state" boolean NOT NULL DEFAULT false, "assignedAt" TIMESTAMP NOT NULL DEFAULT now(), "clothesId" integer, "employeeId" uuid, CONSTRAINT "PK_43c2f5a3859f54cedafb270f37e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_b6b314adf31af2bc33bf23e2c69" FOREIGN KEY ("clothesId") REFERENCES "clothes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_5f46fdabab5b7cc7cf64704a842" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_5f46fdabab5b7cc7cf64704a842"`);
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_b6b314adf31af2bc33bf23e2c69"`);
        await queryRunner.query(`DROP TABLE "assignment"`);
    }

}
