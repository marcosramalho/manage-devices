import { getRepository, Repository } from 'typeorm'

import ICreateDeviceDTO from '../../domain/dtos/devices/ICreateDevice.dto'
import IUpdateDeviceDto from '../../domain/dtos/devices/IUpdateCategory.dto'
import { Device } from '../../domain/entities/device.entity'

class DevicesRepository {
  private ormRepository: Repository<Device>

  constructor() {
    this.ormRepository = getRepository(Device)
  }

  public async create(data: ICreateDeviceDTO): Promise<Device> {
    const user = this.ormRepository.create(data)

    await this.ormRepository.save(user)

    return user
  }

  public async findAll(): Promise<Device[]> {
    return this.ormRepository.find({ relations: ['category'] })
  }

  public async findById(id: number): Promise<Device | undefined> {
    return this.ormRepository.findOne(id, { relations: ['category'] })
  }

  public async update(id: number, data: IUpdateDeviceDto) {
    return this.ormRepository.update(id, data)
  }

  public async delete(id: number) {
    return this.ormRepository.delete(id)
  }
}

export default DevicesRepository
