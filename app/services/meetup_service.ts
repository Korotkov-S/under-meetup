import Meetup from '#models/meetup'
import { DateTime } from 'luxon'

export class MeetupService {
  #baseQuere() {
    return Meetup.query().preload('performances', (performanceQuery) => {
      performanceQuery.preloadOnce('speaker')
    })
  }

  findByVersion(version: string) {
    return this.#baseQuere().where({ version }).first()
  }

  async findActiveMeetup() {
    return this.#baseQuere()
      .where('start', '>', DateTime.now().toSQL())
      .orderBy('start', 'asc')
      .first()
  }

  findLastMeetup() {
    return this.#baseQuere().orderBy('start', 'desc').first()
  }
}
