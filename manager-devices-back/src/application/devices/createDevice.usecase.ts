import ICreateDeviceDTO from '../../domain/dtos/devices/ICreateDevice.dto'
import DevicesRepository from '../../infrastructure/repositories/devices.repository'

export class CreateDeviceUseCase {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  execute(device: ICreateDeviceDTO) {
    return this.devicesRepository.create(device)
  }
}
