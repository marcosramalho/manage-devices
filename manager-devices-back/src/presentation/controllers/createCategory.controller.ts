import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http'
import { BaseController } from '../protocols/controller'

export class CreateCategoryController implements BaseController {
  execute(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return { statusCode: 200, body: null }
  }
}
