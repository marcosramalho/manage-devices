import { HttpRequest, HttpResponse } from './http'

export interface BaseController {
  execute(httpRequest: HttpRequest): Promise<HttpResponse>
}
