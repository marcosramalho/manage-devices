import { HttpRequest, HttpResponse } from '../protocols/http'

export class CreateCategoryController {
  execute(httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    }
  }
}
