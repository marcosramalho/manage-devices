import { Router } from 'express'

import { makeCreateCategoryController } from './factories/categories/createCategory.factory'
import { makeDeleteCategoryController } from './factories/categories/deleteCategory.factory'
import { makeGetByIdCategoryController } from './factories/categories/getByIdCategory.factory'
import { makeListAllCategoryController } from './factories/categories/listAllCategory.factory'
import { makeUpdateCategoryController } from './factories/categories/updateCategory.factory'

const routes = Router()

routes.post('/categories', makeCreateCategoryController)
routes.get('/categories', makeListAllCategoryController)
routes.get('/categories/:id', makeGetByIdCategoryController)
routes.put('/categories/:id', makeUpdateCategoryController)
routes.delete('/categories/:id', makeDeleteCategoryController)

export default routes
