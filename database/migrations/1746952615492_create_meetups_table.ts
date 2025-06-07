import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meetups'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('number').notNullable()
      table.string('registration_link').notNullable()
      table.dateTime('start').notNullable()
      table.dateTime('finish').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
