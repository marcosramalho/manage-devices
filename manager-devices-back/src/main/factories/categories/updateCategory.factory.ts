import { Request, Response } from 'express'

import { UpdateCategoryUseCase } from '../../../application/categories/updateCategory.usecase'
import CategoriesRepository from '../../../infrastructure/repositories/Categories.repository'
import { UpdateCategoryController } from '../../../presentation/controllers/categories/updateCategory.controller'

export const makeUpdateCategoryController = async (
  req: Request,
  res: Response
) => {
  const repository = new CategoriesRepository()
  const usecase = new UpdateCategoryUseCase(repository)
  const controller = new UpdateCategoryController(usecase)
  const result = await controller.execute(Number(req.params.id), req.body)

  return res.status(result.statusCode).json(result.body)
}
