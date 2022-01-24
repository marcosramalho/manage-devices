import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http'
import { BaseController } from '../protocols/controller'
import { CreateCategoryUseCase } from '../../application/categories/createCategory.usecase'

export class CreateCategoryController implements BaseController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const category = await this.createCategoryUseCase.execute(
        httpRequest.body
      )

      return { statusCode: 200, body: category }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
