import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Performance from './performance.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Speaker extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare photo: string | null

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare companyName: string

  @column()
  declare position: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Performance)
  declare performances: HasMany<typeof Performance>
}
