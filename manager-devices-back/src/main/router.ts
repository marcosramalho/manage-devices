import { Router } from 'express'

import { makeCreateCategoryController } from './factories/createCategory.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)

export default routes
