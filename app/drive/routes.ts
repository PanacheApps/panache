/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const DriveController = () => import('#drive/controllers/drive_controller')
const FIleController = () => import('#drive/controllers/file_controller')


router.group(() => {
    router.get('/drive', [DriveController, 'index'])
    router.post('/drive/upload', [FIleController, 'upload'])

    // Files
    router.put('/drive/file/:id', [FIleController, 'rename'])
    router.delete('/drive/file/:id', [FIleController, 'trash'])


}).use(middleware.auth())

