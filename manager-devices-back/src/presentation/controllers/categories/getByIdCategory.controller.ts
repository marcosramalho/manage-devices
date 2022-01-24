import { HttpResponse } from '../../protocols/http'
import { GetIdCategoryUseCase } from '../../../application/categories/getByIdCategory.usecase'

export class GetByIdCategoryController {
  constructor(private readonly getIdCategoryUseCase: GetIdCategoryUseCase) {}

  async execute(id: number): Promise<HttpResponse> {
    try {
      const category = await this.getIdCategoryUseCase.execute(id)

      return {
        statusCode: category ? 200 : 404,
        body: category,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
