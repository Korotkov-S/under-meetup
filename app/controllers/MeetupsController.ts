import type { HttpContext } from '@adonisjs/core/http'

export default class MeetupsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('meetups/index', { id: 1 })
  }

  async show({ inertia, params }: HttpContext) {
    return inertia.render('meetups/show', { id: params.id })
  }

  async activeMeetup({ inertia, params }: HttpContext) {
    return inertia.render('home', { id: params.id })
  }
}
