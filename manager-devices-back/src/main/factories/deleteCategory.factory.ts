import { Request, Response } from 'express'

import { DeleteCategoryUseCase } from '../../application/categories/deleteCategory.usecase'
import CategoriesRepository from '../../infrastructure/repositories/Categories.repository'
import { DeleteCategoryController } from '../../presentation/controllers/categories/deleteCategory.controller copy'

export const makeDeleteCategoryController = async (
  req: Request,
  res: Response
) => {
  const repository = new CategoriesRepository()
  const usecase = new DeleteCategoryUseCase(repository)
  const controller = new DeleteCategoryController(usecase)
  const result = await controller.execute(Number(req.params.id))

  return res.status(result.statusCode).json(result.body)
}
