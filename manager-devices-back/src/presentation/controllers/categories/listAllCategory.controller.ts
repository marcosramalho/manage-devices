import { ListAllCategoryUseCase } from '../../../application/categories/listAllCategory.usecase'
import { HttpResponse } from '../../../presentation/protocols/http'
import { BaseController } from '../../../presentation/protocols/controller'

export class ListAllCategoryController implements BaseController {
  constructor(
    private readonly listAllCategoryUseCase: ListAllCategoryUseCase
  ) {}

  async execute(): Promise<HttpResponse> {
    try {
      const categories = await this.listAllCategoryUseCase.execute()

      return {
        statusCode: categories.length > 0 ? 200 : 404,
        body: categories,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
