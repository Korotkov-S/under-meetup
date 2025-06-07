import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meetups'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.unique(['version'])
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropUnique(['version'])
    })
  }
}
