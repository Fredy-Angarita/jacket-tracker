import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1755628167947 implements MigrationInterface {
    name = 'CreateUsersTable1755628167947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(30) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_88f2ddcb028aa4bc62e22656870" UNIQUE ("username"), CONSTRAINT "UQ_6f484592228a724d0ae83ca3a53" UNIQUE ("email"), CONSTRAINT "PK_284f4d1aef6ebd3cde53038af46" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "_user"`);
    }

}
