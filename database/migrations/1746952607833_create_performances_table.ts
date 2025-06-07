import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'performances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.dateTime('start').notNullable()
      table.dateTime('finish').notNullable()

      table
        .integer('speaker_id')
        .unsigned()
        .references('id')
        .inTable('speakers')
        .onDelete('SET NULL')
        .nullable()

      table.integer('meetup_id').unsigned().references('id').inTable('meetups').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
