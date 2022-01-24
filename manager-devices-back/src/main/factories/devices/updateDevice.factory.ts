import { Request, Response } from 'express'

import { UpdateDeviceUseCase } from '@application/devices/updateDevice.usecase'
import DevicesRepository from '@infrastructure/repositories/devices.repository'
import { UpdateDeviceController } from '@presentation/controllers/devices/updateDevice.controller'

export const makeUpdateDeviceController = async (
  req: Request,
  res: Response
) => {
  const repository = new DevicesRepository()
  const usecase = new UpdateDeviceUseCase(repository)
  const controller = new UpdateDeviceController(usecase)
  const result = await controller.execute(Number(req.params.id), req.body)

  return res.status(result.statusCode).json(result.body)
}
