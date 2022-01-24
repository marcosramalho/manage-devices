import IUpdateCategoryDto from '@domain/dtos/categories/IUpdateCategory.dto'
import CategoriesRepository from '@infrastructure/repositories/Categories.repository'

export class UpdateCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  execute(id: number, category: IUpdateCategoryDto): Promise<any> {
    return this.categoriesRepository.update(id, category)
  }
}
