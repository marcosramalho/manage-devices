import { Request, Response } from 'express'
import { GetIdCategoryUseCase } from '@application/categories/getByIdCategory.usecase'

import CategoriesRepository from '@infrastructure/repositories/Categories.repository'
import { GetByIdCategoryController } from '@presentation/controllers/categories/getByIdCategory.controller'

export const makeGetByIdCategoryController = async (
  req: Request,
  res: Response
) => {
  const repository = new CategoriesRepository()
  const usecase = new GetIdCategoryUseCase(repository)
  const controller = new GetByIdCategoryController(usecase)
  const result = await controller.execute(Number(req.params.id))

  return res.status(result.statusCode).json(result.body)
}
