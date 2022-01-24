import { HttpResponse } from '@presentation/protocols/http'
import { UpdateDeviceUseCase } from '@application/devices/updateDevice.usecase'
import IUpdateDeviceDto from '@domain/dtos/devices/IUpdateCategory.dto'

export class UpdateDeviceController {
  constructor(private readonly updateDeviceUseCase: UpdateDeviceUseCase) {}

  async execute(id: number, data: IUpdateDeviceDto): Promise<HttpResponse> {
    try {
      const result = await this.updateDeviceUseCase.execute(id, data)

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
