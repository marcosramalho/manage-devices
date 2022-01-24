import ICreateCategoryDTO from '@domain/dtos/categories/ICreateCategory.dto'
import CategoriesRepository from '@infrastructure/repositories/Categories.repository'

export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  execute(category: ICreateCategoryDTO) {
    return this.categoriesRepository.create(category)
  }
}
