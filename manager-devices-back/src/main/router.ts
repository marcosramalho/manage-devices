import { Router } from 'express'

import { makeCreateCategoryController } from './factories/createCategory.factory'
import { makeGetByIdCategoryController } from './factories/getByIdCategory.factory'
import { makeListAllCategoryController } from './factories/listAllCategory.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)
routes.get('/categories', makeListAllCategoryController)
routes.get('/categories/:id', makeGetByIdCategoryController)

export default routes
