import Meetup from '#models/meetup'
import ClockIcon from '~/assets/icons/ClockIcon'
import MicIcon from '~/assets/icons/MicIcon'
import UsersIcon from '~/assets/icons/UsersIcon'
import ButtonLink from '~/components/ButtonLink'
import Header from '~/components/Header'
import SpeakerItem from '~/components/SpeakerItem'
import telegram from '~/assets/telegram.png'
import { Button } from '~/components/Button'
import { InferPageProps } from '@adonisjs/inertia/types'
import MeetupsController from '#controllers/meetups_controller'
// { id: string; meetup: Meetup }
export default function MeetupShow(props: InferPageProps<MeetupsController, 'show'>) {
  console.log(props.meetup)

  const getStartFinish = ({ start, finish }: { start: string; finish: string }) => {
    const startDate = new Date(start)
    const finishDate = new Date(finish)
    return `${startDate.getUTCHours()}:${startDate.getUTCMinutes()} - ${finishDate.getUTCHours()}:${finishDate.getUTCMinutes()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[672px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <Header
            version={props.meetup.version}
            start={new Date(props.meetup.start)}
            finish={new Date(props.meetup.finish)}
          />

          <div className="space-y-4">
            {props.meetup.timepadId && (
              <div className="flex items-center bg-white rounded-3xl shadow-block p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg text-text-primary font-medium leading-tight">
                      Пройдите регистрацию
                    </p>
                  </div>
                </div>

                <Button id={props.meetup.timepadId} className="ml-auto">
                  Зарегистрироваться
                </Button>
              </div>
            )}

            <div className="flex items-center bg-white rounded-3xl shadow-block p-4">
              <div className="flex items-center gap-4">
                <img src={telegram} alt="telegram" className="w-10 h-10" />

                <div>
                  <p className="text-lg text-text-primary font-medium leading-tight">
                    Чатик в телеге
                  </p>
                  <a
                    href="https://t.me/undermeetup"
                    className="ml-auto"
                    target="_blank"
                    rel="noopener"
                  >
                    <p className="text-md text-text-link font-medium leading-tight">@undermeetup</p>
                  </a>
                </div>
              </div>

              <ButtonLink href="https://t.me/undermeetup" className="ml-auto" target="_blank">
                Открыть
              </ButtonLink>
            </div>

            <div className="bg-white rounded-3xl shadow-block px-4 py-8">
              {/* <h2 className="text-3xl font-bold mb-6">UnderМитап</h2> */}
              <div className="flex flex-col gap-10">
                <div className="flex gap-4 items-center">
                  <ClockIcon />
                  <div>
                    <p className="text-lg text-primary font-medium">18:00 - 18:20</p>
                    <p className="text-text-subtitle">Сбор людей</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MicIcon />
                  <div>
                    <p className="text-lg text-primary font-medium">18:20 - 18:30</p>
                    <p className="text-text-subtitle">Приветсвенное слово</p>
                  </div>
                </div>

                {props.meetup.performances.map((perf) => {
                  return (
                    <SpeakerItem
                      key={perf.id}
                      image={''}
                      name={`${perf.speaker.firstName} ${perf.speaker.lastName}`}
                      position={`${perf.speaker.position}, ${perf.speaker.companyName}`}
                      time={getStartFinish({ start: perf.start, finish: perf.finish })}
                      title={perf.name}
                      text={[perf.description]}
                    />
                  )
                })}

                <div className="flex gap-4 items-center">
                  <UsersIcon />
                  <div>
                    <p className="text-lg text-primary font-medium">21:00</p>
                    <p className="text-text-subtitle">Продолжение встречи на студенной горе</p>
                    <p className="text-text-subtitle">
                      <a
                        href="https://yandex.ru/maps/-/CHRQzDNX"
                        className="text-text-link leading-tight"
                        target="_blank"
                        rel="noopener"
                      >
                        Дворянская улица, 27Ак1, Владимир
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
