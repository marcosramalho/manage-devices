import { CreateCategoryController } from './createCategory.controller'
import { MissingParamError } from '../errors/missing-param-error'

describe('CreateCategory Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new CreateCategoryController()
    const httpRequest = {
      body: {},
    }

    const httpResponse = sut.execute(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
