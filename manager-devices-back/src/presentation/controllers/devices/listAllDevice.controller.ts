import { HttpResponse } from '../../protocols/http'
import { BaseController } from '../../protocols/controller'
import { ListAllDeviceUseCase } from '../../../application/devices/listAllDevice.usecase'

export class ListAllDeviceController implements BaseController {
  constructor(private readonly listAllDeviceUseCase: ListAllDeviceUseCase) {}

  async execute(): Promise<HttpResponse> {
    try {
      const devices = await this.listAllDeviceUseCase.execute()

      return {
        statusCode: devices.length > 0 ? 200 : 404,
        body: devices,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
