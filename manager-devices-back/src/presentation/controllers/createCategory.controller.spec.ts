import { CreateCategoryController } from './createCategory.controller'

describe('CreateCategory Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new CreateCategoryController()
    const httpRequest = {
      body: {},
    }

    const httpResponse = sut.execute(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
