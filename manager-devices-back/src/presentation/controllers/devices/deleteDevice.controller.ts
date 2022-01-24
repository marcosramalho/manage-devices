import { HttpResponse } from '../../protocols/http'
import { DeleteDeviceUseCase } from '../../../application/devices/deleteDevice.usecase'

export class DeleteDeviceController {
  constructor(private readonly deleteDeviceUseCase: DeleteDeviceUseCase) {}

  async execute(id: number): Promise<HttpResponse> {
    try {
      const result = await this.deleteDeviceUseCase.execute(id)

      return {
        statusCode: Number(result.affected) === 1 ? 200 : 404,
        body: undefined,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new Error('Server internal error'),
      }
    }
  }
}
