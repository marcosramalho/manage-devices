import { Router } from 'express'

import { makeCreateCategoryController } from './factories/createCategory.factory'
import { makeDeleteCategoryController } from './factories/deleteCategory.factory'
import { makeGetByIdCategoryController } from './factories/getByIdCategory.factory'
import { makeListAllCategoryController } from './factories/listAllCategory.factory'
import { makeUpdateCategoryController } from './factories/updateCategory.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)
routes.get('/categories', makeListAllCategoryController)
routes.get('/categories/:id', makeGetByIdCategoryController)
routes.put('/categories/:id', makeUpdateCategoryController)
routes.delete('/categories/:id', makeDeleteCategoryController)

export default routes
