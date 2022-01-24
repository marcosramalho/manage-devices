import { HttpRequest, HttpResponse } from '@presentation/protocols/http'
import { MissingParamError } from '@presentation/errors/missing-param-error'
import { badRequest } from '@presentation/helpers/http'
import { BaseController } from '@presentation/protocols/controller'
import { CreateDeviceUseCase } from '@application/devices/createDevice.usecase'

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

      const device = await this.createDeviceUseCase.execute(httpRequest.body)

      return { statusCode: 201, body: device }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
