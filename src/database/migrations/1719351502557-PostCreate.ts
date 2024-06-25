import { MigrationInterface, QueryRunner } from "typeorm";

export class PostCreate1719351502557 implements MigrationInterface {
    name = 'PostCreate1719351502557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "posts" 
            (
             "id" SERIAL NOT NULL,
             "title" character varying NOT NULL,
             "body" character varying NOT NULL,
             "is_active" boolean NOT NULL,
             "created_at" TIMESTAMP NOT NULL DEFAULT now(),
             "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
             CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
