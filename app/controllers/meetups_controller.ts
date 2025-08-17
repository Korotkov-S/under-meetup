import { MeetupService } from '#services/meetup_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class MeetupsController {
  constructor(private meetupService: MeetupService) {}

  async show({ inertia, params, response }: HttpContext) {
    const meetup = await this.meetupService.findByVersion(params.id)

    if (!meetup) {
      return response.redirect().toPath('/')
    }

    return inertia.render('meetups/show', { meetup }, { timepadId: meetup.timepadId })
  }

  async activeMeetup({ inertia }: HttpContext) {
    let meetup = await this.meetupService.findActiveMeetup()

    if (!meetup) {
      meetup = await this.meetupService.findLastMeetup()
    }

    //@ts-ignore
    return inertia.render('meetups/show', { meetup }, { timepadId: meetup.timepadId })
  }
}
