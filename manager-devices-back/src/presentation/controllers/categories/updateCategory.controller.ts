import { HttpResponse } from '../../protocols/http'
import { UpdateCategoryUseCase } from '../../../application/categories/updateCategory.usecase'
import IUpdateCategoryDto from '../../../domain/dtos/categories/IUpdateCategory.dto'

export class UpdateCategoryController {
  constructor(private readonly updateCategoryUseCase: UpdateCategoryUseCase) {}

  async execute(
    id: number,
    categoryData: IUpdateCategoryDto
  ): Promise<HttpResponse> {
    try {
      const result = await this.updateCategoryUseCase.execute(id, categoryData)

      return {
        statusCode: Number(result.affected) === 1 ? 200 : 404,
        body: undefined,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
