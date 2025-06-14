import Meetup from '#models/meetup'
import type { HttpContext } from '@adonisjs/core/http'

export default class MeetupsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('meetups/index', { id: 1 })
  }

  async show({ inertia, params }: HttpContext) {
    const meetup = await Meetup.query()
      .preload('performances', (performanceQuery) => {
        performanceQuery.preloadOnce('speaker')
      })
      .where({ id: params.id })
      .first()

    return inertia.render('meetups/show', { id: params.id, meetup })
  }

  async activeMeetup({ inertia, params }: HttpContext) {
    return inertia.render('home', { id: params.id })
  }
}
