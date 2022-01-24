import IUpdateDeviceDto from '@domain/dtos/devices/IUpdateCategory.dto'
import DevicesRepository from '@infrastructure/repositories/devices.repository'

export class UpdateDeviceUseCase {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  execute(id: number, device: IUpdateDeviceDto): Promise<any> {
    return this.devicesRepository.update(id, device)
  }
}
