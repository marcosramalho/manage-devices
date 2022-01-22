import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http'

export class CreateCategoryController {
  execute(httpRequest: HttpRequest): HttpResponse {
    return badRequest(new MissingParamError('name'))
  }
}
