import IListAllDeviceDto from '../../domain/dtos/devices/ILIstAllDevice.dto'
import DevicesRepository from '../../infrastructure/repositories/devices.repository'

export class ListAllDeviceUseCase {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  execute(): Promise<IListAllDeviceDto[]> {
    return this.devicesRepository.findAll()
  }
}
