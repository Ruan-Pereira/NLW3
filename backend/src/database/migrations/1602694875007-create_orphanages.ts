import { triggerAsyncId } from "async_hooks";
import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602694875007 implements MigrationInterface {
  // realizar alterações,criar tabela, criar um novo campo etc
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
          {
          name:'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment', 
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2.
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2.
        },
        {
          name:'about',
          type:'text'
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'bollean',
          default: false,
        }
      ,]
    }))
  }
  //desfazer ,caso der algum problema
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
