import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http'
import { BaseController } from '../../protocols/controller'
import { CreateDeviceUseCase } from '../../../application/devices/createDevice.usecase'

export class CreateDeviceController implements BaseController {
  constructor(private readonly createDeviceUseCase: CreateDeviceUseCase) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['categoryId', 'partNumber', 'color']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const category = await this.createDeviceUseCase.execute(httpRequest.body)

      return { statusCode: 201, body: category }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
