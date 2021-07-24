import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1627142563049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                   name: 'id',
                   type: 'uuid',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                   isNullable: false,
                   default: 'uuid_generate_v4()' 
                },
                {
                    name: 'email',
                    isUnique: true,
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'firstname',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'lastname',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'phonenumber',
                    type: 'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
