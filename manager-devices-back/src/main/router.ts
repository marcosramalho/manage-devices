import { Router } from 'express'

import { makeCreateCategoryController } from './factories/createCategory.factory'
import { makeListAllCategoryController } from './factories/listAllCategory.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)
routes.get('/categories', makeListAllCategoryController)

export default routes
