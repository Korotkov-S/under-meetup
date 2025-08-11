import Meetup from '#models/meetup'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class MeetupsController {
  #baseQuere() {
    return Meetup.query().preload('performances', (performanceQuery) => {
      performanceQuery.preloadOnce('speaker')
    })
  }

  async show({ inertia, params, response }: HttpContext) {
    const meetup = await this.#baseQuere().where({ version: params.id }).first()

    if (!meetup) {
      return response.redirect().toPath('/')
    }

    return inertia.render('meetups/show', { meetup }, { timepadId: meetup.timepadId })
  }

  async activeMeetup({ inertia }: HttpContext) {
    let meetup = await this.#baseQuere()
      .where('start', '>', DateTime.now().toSQL())
      .orderBy('start', 'asc')
      .first()

    if (!meetup) {
      meetup = await this.#baseQuere().orderBy('start', 'desc').first()
    }

    //@ts-ignore
    return inertia.render('meetups/show', { meetup }, { timepadId: meetup.timepadId })
  }
}
