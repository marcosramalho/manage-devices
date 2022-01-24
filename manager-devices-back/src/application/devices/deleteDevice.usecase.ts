import DevicesRepository from '../../infrastructure/repositories/devices.repository'

export class DeleteDeviceUseCase {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  execute(id: number): Promise<any> {
    return this.devicesRepository.delete(id)
  }
}
