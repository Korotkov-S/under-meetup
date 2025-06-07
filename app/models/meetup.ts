import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Performance from './performance.js'

export default class Meetup extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare version: string

  @column()
  declare registrationLink: string

  @column.dateTime()
  declare start: DateTime

  @column.dateTime()
  declare finish: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Performance)
  declare performance: HasMany<typeof Performance>
}
