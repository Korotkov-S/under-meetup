import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meetups'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('timepad_id').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('timepad_id')
    })
  }
}
