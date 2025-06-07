import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Speaker from './speaker.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Meetup from './meetup.js'

export default class Performance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime()
  declare start: DateTime

  @column.dateTime()
  declare finish: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Speaker)
  declare speaker: BelongsTo<typeof Speaker>

  @belongsTo(() => Meetup)
  declare meetup: BelongsTo<typeof Meetup>
}
