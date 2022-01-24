import { HttpResponse } from '../protocols/http'
import IUpdateCategoryDto from '../../domain/dtos/categories/IUpdateCategory.dto'
import { DeleteCategoryUseCase } from '../../application/categories/deleteCategory.usecase'

export class DeleteCategoryController {
  constructor(private readonly deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async execute(id: number): Promise<HttpResponse> {
    try {
      const result = await this.deleteCategoryUseCase.execute(id)

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
