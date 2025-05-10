/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MeetupsController = () => import('#controllers/MeetupsController')

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.resource('meetups', MeetupsController)
