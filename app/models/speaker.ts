import { DateTime } from 'luxon'
import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import Performance from './performance.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import env from '#start/env'

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

  @computed()
  public get photoUrl() {
    if (!this.photo) {
      return ''
    }

    const url = new URL(`https://${env.get('HOST')}:${env.get('PORT')}`)
    url.pathname = `uploads/${this.photo}`
    return url.toString()
  }
}
