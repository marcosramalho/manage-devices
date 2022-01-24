import { Router } from 'express'

import { makeCreateCategoryController } from './factories/categories/createCategory.factory'
import { makeDeleteCategoryController } from './factories/categories/deleteCategory.factory'
import { makeGetByIdCategoryController } from './factories/categories/getByIdCategory.factory'
import { makeListAllCategoryController } from './factories/categories/listAllCategory.factory'
import { makeUpdateCategoryController } from './factories/categories/updateCategory.factory'
import { makeCreateDeviceController } from './factories/devices/createDevice.factory'
import { makeDeleteDeviceController } from './factories/devices/deleteDevice.factory'
import { makeGetByIdDeviceController } from './factories/devices/getByIdDevice.factory'
import { makeListAllDeviceController } from './factories/devices/listAllDevice.factory'
import { makeUpdateDeviceController } from './factories/devices/updateDevice.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)
routes.get('/categories', makeListAllCategoryController)
routes.get('/categories/:id', makeGetByIdCategoryController)
routes.put('/categories/:id', makeUpdateCategoryController)
routes.delete('/categories/:id', makeDeleteCategoryController)

routes.post('/devices', makeCreateDeviceController)
routes.get('/devices', makeListAllDeviceController)
routes.get('/devices/:id', makeGetByIdDeviceController)
routes.put('/devices/:id', makeUpdateDeviceController)
routes.delete('/devices/:id', makeDeleteDeviceController)

export default routes
