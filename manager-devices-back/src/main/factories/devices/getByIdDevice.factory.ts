import { Request, Response } from 'express'

import { GetIdDeviceUseCase } from '../../../application/devices/getByIdDevice.usecase'
import DevicesRepository from '../../../infrastructure/repositories/devices.repository'
import { GetByIdDeviceController } from '../../../presentation/controllers/devices/getByIdDevice.controller'

export const makeGetByIdDeviceController = async (
  req: Request,
  res: Response
) => {
  const repository = new DevicesRepository()
  const usecase = new GetIdDeviceUseCase(repository)
  const controller = new GetByIdDeviceController(usecase)
  const result = await controller.execute(Number(req.params.id))

  return res.status(result.statusCode).json(result.body)
}
