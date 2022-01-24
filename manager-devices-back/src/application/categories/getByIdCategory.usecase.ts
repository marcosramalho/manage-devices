import ICategoryDto from '../../domain/dtos/categories/ICategory.dto'
import CategoriesRepository from '../../infrastructure/repositories/Categories.repository'

export class GetIdCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  execute(id: number): Promise<ICategoryDto | undefined> {
    return this.categoriesRepository.findById(id)
  }
}
