import { Request, Response } from 'express'

import { CreateCategoryUseCase } from '../../application/categories/createCategory.usecase'
import CategoriesRepository from '../../infrastructure/repositories/Categories.repository'
import { CreateCategoryController } from '../../presentation/controllers/categories/createCategory.controller'

export const makeCreateCategoryController = async (
  req: Request,
  res: Response
) => {
  const repository = new CategoriesRepository()
  const usecase = new CreateCategoryUseCase(repository)
  const controller = new CreateCategoryController(usecase)
  const result = await controller.execute({ body: req.body })

  return res.status(result.statusCode).json({ ...result.body })
}
