import IListAllCategoryDto from '@domain/dtos/categories/ILIstAllCategory.dto'
import CategoriesRepository from '@infrastructure/repositories/Categories.repository'

export class ListAllCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  execute(): Promise<IListAllCategoryDto[]> {
    return this.categoriesRepository.findAll()
  }
}
