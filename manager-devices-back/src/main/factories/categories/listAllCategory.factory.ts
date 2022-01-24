import { Request, Response } from 'express'

import { ListAllCategoryUseCase } from '../../../application/categories/listAllCategory.usecase'
import CategoriesRepository from '../../../infrastructure/repositories/Categories.repository'
import { ListAllCategoryController } from '../../../presentation/controllers/categories/listAllCategory.controller'

export const makeListAllCategoryController = async (
  req: Request,
  res: Response
) => {
  const repository = new CategoriesRepository()
  const usecase = new ListAllCategoryUseCase(repository)
  const controller = new ListAllCategoryController(usecase)
  const result = await controller.execute()

  return res.status(result.statusCode).json(result.body)
}
