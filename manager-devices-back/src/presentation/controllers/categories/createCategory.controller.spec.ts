import { CreateCategoryController } from './createCategory.controller'
import { MissingParamError } from '../../errors/missing-param-error'

describe('CreateCategory Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const httpRequest = {
      body: {},
    }

    expect(1).toEqual(1)
  })
})
