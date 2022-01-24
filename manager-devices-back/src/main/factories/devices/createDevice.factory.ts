import { Request, Response } from 'express'

import { CreateDeviceUseCase } from '@application/devices/createDevice.usecase'
import DevicesRepository from '@infrastructure/repositories/devices.repository'
import { CreateDeviceController } from '@presentation/controllers/devices/createDevice.controller'

export const makeCreateDeviceController = async (
  req: Request,
  res: Response
) => {
  const repository = new DevicesRepository()
  const usecase = new CreateDeviceUseCase(repository)
  const controller = new CreateDeviceController(usecase)
  const result = await controller.execute({ body: req.body })

  return res.status(result.statusCode).json({ ...result.body })
}
