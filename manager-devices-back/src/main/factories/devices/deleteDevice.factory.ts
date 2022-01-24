import { Request, Response } from 'express'

import { DeleteDeviceUseCase } from '@application/devices/deleteDevice.usecase'
import DevicesRepository from '@infrastructure/repositories/devices.repository'
import { DeleteDeviceController } from '@presentation/controllers/devices/deleteDevice.controller'

export const makeDeleteDeviceController = async (
  req: Request,
  res: Response
) => {
  const repository = new DevicesRepository()
  const usecase = new DeleteDeviceUseCase(repository)
  const controller = new DeleteDeviceController(usecase)
  const result = await controller.execute(Number(req.params.id))

  return res.status(result.statusCode).json(result.body)
}
