import { Request, Response } from 'express'

import { ListAllDeviceUseCase } from '../../../application/devices/listAllDevice.usecase'
import DevicesRepository from '../../../infrastructure/repositories/devices.repository'
import { ListAllDeviceController } from '../../../presentation/controllers/devices/listAllDevice.controller'

export const makeListAllDeviceController = async (
  req: Request,
  res: Response
) => {
  const repository = new DevicesRepository()
  const usecase = new ListAllDeviceUseCase(repository)
  const controller = new ListAllDeviceController(usecase)
  const result = await controller.execute()

  return res.status(result.statusCode).json(result.body)
}
