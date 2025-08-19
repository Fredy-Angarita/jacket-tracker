import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClothesTable1755634559023 implements MigrationInterface {
    name = 'CreateClothesTable1755634559023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clothes" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "price" numeric(5,2) NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "sizesId" integer, CONSTRAINT "PK_c73aa6c72fd4b3213bfcdc8739b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clothes" ADD CONSTRAINT "FK_88ba9038fb3c25b17e8621d3258" FOREIGN KEY ("sizesId") REFERENCES "clothes_sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clothes" DROP CONSTRAINT "FK_88ba9038fb3c25b17e8621d3258"`);
        await queryRunner.query(`DROP TABLE "clothes"`);
    }

}
