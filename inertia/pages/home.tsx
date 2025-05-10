import ClockIcon from '~/assets/icons/ClockIcon'
import MicIcon from '~/assets/icons/MicIcon'
import UsersIcon from '~/assets/icons/UsersIcon'
import ButtonLink from '~/components/ButtonLink'
import Header from '~/components/Header'
import SpeakerItem from '~/components/SpeakerItem'
import pasha from '~/assets/speakers/pasha.jpg'
import alex from '~/assets/speakers/alex.png'
import vlad from '~/assets/speakers/vlad.png'

import telegram from '~/assets/telegram.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}

      {/* <h1 className="text-4xl font-bold text-black text-center">UnderМитап</h1> */}
      {/* <div className="bg-blue-600 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center ">
            <h1 className="text-4xl font-bold text-white text-center">
              UnderМитап
            </h1>
            <div className="flex items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15 марта 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Технопарк "Сколково"</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-[672px] mx-auto px-4 py-8">
        {/* <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center">UnderМитап</h2>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-8">
          <Header />

          <div className="space-y-4">
            <div className="flex items-center bg-white rounded-3xl shadow-block p-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-lg text-text-primary font-medium leading-tight">
                    Пройдите регистрацию
                  </p>
                </div>
              </div>

              <ButtonLink
                href="https://forms.yandex.ru/u/67cb4b15068ff03038a70a48/"
                className="ml-auto"
                target="_blank"
              >
                Зарегистрироваться
              </ButtonLink>
            </div>

            <div className="flex items-center bg-white rounded-3xl shadow-block p-4">
              <div className="flex items-center gap-4">
                <img src={telegram} alt="telegram" className="w-10 h-10" />

                <div>
                  <p className="text-lg text-text-primary font-medium leading-tight">
                    Чатик в телеге
                  </p>
                  <a href="https://t.me/undermeetup" className="ml-auto" target="_blank">
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

                <SpeakerItem
                  image={pasha}
                  name="Ланцев Павел"
                  position="Android Lead, Windy.app"
                  time="18:30 - 19:00"
                  title="RecyclerView: Путеводитель по Галактике Списков 🚀"
                  text={[
                    'RecyclerView – один из ключевых инструментов для работы со списками в Android. Однако его неправильное использование может привести к лагам, избыточному потреблению памяти и снижению производительности приложения. Мы разберём лучшие практики работы с RecyclerView, рассмотрим распространённые ошибки и обсудим стратегии оптимизации.',
                  ]}
                />

                <SpeakerItem
                  image={alex}
                  name="Коротков Александр"
                  position="Старший разработчик, Студия Коротковых, Соц. сеть ЛО"
                  time="19:15 - 19:45"
                  title="SSH Config: Настройка, которая сэкономит ваше время"
                  text={[
                    'SSH Config — это просто, но эффективно. С его помощью настроить алиасы, указать параметры подключения и избавиться от повторяющихся действий, экономя ваше время каждый день.',
                  ]}
                />

                <SpeakerItem
                  image={vlad}
                  name="Владислав Давиденко"
                  position="Разработчик мобильных приложений, Nextika"
                  time="20:00 - 20:30"
                  title="Проект: от идеи до релиза"
                  text={[
                    `Наша компания имеет опыт реализации проектов, и в рамках этого опыта расскажу, как идея заказчика становится готовым продуктом.
                    Грамотный процесс важен для успеха: он влияет на прибыль, удовлетворенность клиента и долгосрочное доверие.`,
                    `Ключевая цель — качественный результат, полезный для всех. Успех зависит от слаженной работы на каждом этапе: важно уделять внимание деталям, поддерживать коммуникацию с клиентом и быть готовым адаптировать планы.`,
                    `В презентации разберем этапы и нюансы.
                    Это полезно всем, кто участвует в проектах, чтобы лучше понимать процесс и вклад каждого в команде.`,
                  ]}
                />

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
                      >
                        Дворянская улица, 27Ак1, Владимир
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
        </div>
      </div>
    </div>
  )
}
