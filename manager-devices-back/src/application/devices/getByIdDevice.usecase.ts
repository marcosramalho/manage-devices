import IDeviceDto from '../../domain/dtos/devices/IDevice.dto'
import DevicesRepository from '../../infrastructure/repositories/devices.repository'

export class GetIdDeviceUseCase {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  execute(id: number): Promise<IDeviceDto | undefined> {
    return this.devicesRepository.findById(id)
  }
}
