import { HttpResponse } from '@presentation/protocols/http'
import { GetIdDeviceUseCase } from '@application/devices/getByIdDevice.usecase'

export class GetByIdDeviceController {
  constructor(private readonly getIdDeviceUseCase: GetIdDeviceUseCase) {}

  async execute(id: number): Promise<HttpResponse> {
    try {
      const device = await this.getIdDeviceUseCase.execute(id)

      return {
        statusCode: device ? 200 : 404,
        body: device,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
