import Meetup from '#models/meetup'
import Performance from '#models/performance'
import Speaker from '#models/speaker'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'
import db from '@adonisjs/lucid/services/db'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'

export default class MeetupSeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    await db.transaction(async (trx) => {
      async function generateAvatarPhoto() {
        try {
          // Используем сервис для генерации случайных аватаров
          const url = 'https://api.multiavatar.com/' + cuid() + '.svg'

          const res = await fetch(url)

          if (!res.ok) {
            console.error(`Не удалось скачать аватар: ${url}`)
            // Fallback на picsum для аватаров
            const fallbackUrl = 'https://picsum.photos/200/200'
            const fallbackRes = await fetch(fallbackUrl)

            if (!fallbackRes.ok) {
              console.error(`Не удалось скачать fallback аватар: ${fallbackUrl}`)
              return null
            }

            const buffer = await fallbackRes.arrayBuffer()
            const fileName = `avatars/avatar_${cuid()}.jpg`

            await drive.use('fs').put(fileName, Buffer.from(buffer))
            return fileName
          }

          const svgContent = await res.text()
          const fileName = `avatars/avatar_${cuid()}.svg`

          await drive.use('fs').put(fileName, svgContent)
          return fileName
        } catch (error) {
          console.error('Ошибка при генерации аватара:', error)
          return null
        }
      }

      const meetupVersion0 = await Meetup.create(
        {
          version: '0',
          registrationLink: 'https://forms.yandex.ru/u/6822f66a02848fb25711c8c7',
          start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 18, minute: 0 }),
          finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 21, minute: 0 }),
        },
        { client: trx }
      )

      const meetupVersion1 = await Meetup.create(
        {
          version: '1',
          registrationLink: 'https://forms.yandex.ru/u/6822f66a02848fb25711c8c7',
          start: DateTime.fromObject({ year: 2024, month: 5, day: 30, hour: 18, minute: 30 }),
          finish: DateTime.fromObject({ year: 2024, month: 5, day: 30, hour: 21, minute: 0 }),
        },
        { client: trx }
      )

      const speakerPavel = await Speaker.create(
        {
          firstName: 'Павел',
          lastName: 'Ланцев',
          position: 'Android-лид',
          companyName: 'Windy.app',
          photo: await generateAvatarPhoto(),
        },
        { client: trx }
      )

      const speakerAlex = await Speaker.create(
        {
          firstName: 'Александр',
          lastName: 'Коротков',
          position: 'React-Native-лид',
          companyName: 'Студия Коротковых',
          photo: await generateAvatarPhoto(),
        },
        { client: trx }
      )

      const speakerVlad = await Speaker.create(
        {
          firstName: 'Владислав',
          lastName: 'Давиденко',
          position: 'Разработчик мобильных приложений',
          companyName: 'Nextika',
          photo: await generateAvatarPhoto(),
        },
        { client: trx }
      )

      const speakerKirill = await Speaker.create(
        {
          firstName: 'Кирилл',
          lastName: 'Никитин',
          position: 'Smart-Contract Security Researcher',
          companyName: 'Независимый исследователь',
          photo: await generateAvatarPhoto(),
        },
        { client: trx }
      )

      await Performance.createMany(
        [
          {
            name: 'SSH Config: Настройка, которая сэкономит ваше время',
            description:
              'SSH Config — это просто, но эффективно. С его помощью настроить алиасы, указать параметры подключения и избавиться от повторяющихся действий, экономя ваше время каждый день.',
            meetupId: meetupVersion0.id,
            speakerId: speakerAlex.id,
            start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 18, minute: 30 }),
            finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 0 }),
          },
          {
            name: 'RecyclerView: Путеводитель по Галактике Списков 🚀',
            description:
              'RecyclerView – один из ключевых инструментов для работы со списками в Android. Однако его неправильное использование может привести к лагам, избыточному потреблению памяти и снижению производительности приложения. Мы разберём лучшие практики работы с RecyclerView, рассмотрим распространённые ошибки и обсудим стратегии оптимизации.',
            meetupId: meetupVersion0.id,
            speakerId: speakerPavel.id,
            start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 15 }),
            finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 45 }),
          },
          {
            name: 'Проект: от идеи до релиза',
            description: `Опыт работы с проектами в нашей компании накапливался годами, и сегодня я поделюсь с вами тем, как проект проходит путь от идеи в голове заказчика до момента, когда он становится доступным для пользователей.
            Тема, которую мы сегодня обсудим, крайне важна для всех, кто стремится к успешной реализации проектов. Почему? Потому что от того, как выстроен процесс, зависит не только прибыль, но и удовлетворенность клиента, соответствие его ожиданиям, а также построение долгосрочного доверия. В конечном итоге, речь идет о качественном результате, который приносит пользу всем участникам процесса.
            Успех проекта зависит от слаженной работы на каждом этапе. Здесь важно уделять внимание деталям, поддерживать открытую коммуникацию с клиентом и быть готовым адаптировать планы, если этого требует ситуация. В презентации я разберу каждый этап подробнее, расскажу по нюансы, которые мы учитываем, некоторые нестандартные кейсы и пути работы с ними.
            Будет полезно всем, кто так или иначе задействован в реализации проектов для понимания общего пути и чем можно помочь в рамках командной работы.`,
            meetupId: meetupVersion0.id,
            speakerId: speakerVlad.id,
            start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 20, minute: 0 }),
            finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 20, minute: 30 }),
          },
        ],
        { client: trx }
      )

      await Performance.createMany(
        [
          {
            name: 'Каждый юнит на счету',
            description: `Зачем разработчику знать юнит-экономику?
            Как продуктовые метрики влияют на приоритеты в разработке, почему «фича ради фичи» — тупик, и как понимать, какие задачи реально двигают продукт вперёд.
            Простыми словами о том, как юнит-экономика помогает писать код не в пустоту`,
            meetupId: meetupVersion1.id,
            speakerId: speakerPavel.id,
            start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 18, minute: 30 }),
            finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 0 }),
          },
          {
            name: 'Основы безопасности в Web3. Как не стать жертвой взлома',
            description: `Методы и лучшие практики для обеспечения личной безопасности и смарт-контрактов.
            Что нужно предпринять пользователям и разработчикам для того что бы избежать потери средств`,
            meetupId: meetupVersion1.id,
            speakerId: speakerKirill.id,
            start: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 15 }),
            finish: DateTime.fromObject({ year: 2024, month: 4, day: 4, hour: 19, minute: 45 }),
          },
        ],
        { client: trx }
      )
    })
  }
}
