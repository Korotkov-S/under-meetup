/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MeetupsController = () => import('#controllers/meetups_controller')

import router from '@adonisjs/core/services/router'
router.get('/', [MeetupsController, 'activeMeetup'])
router.resource('meetups', MeetupsController)
