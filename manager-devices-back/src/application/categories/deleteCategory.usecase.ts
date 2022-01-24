import CategoriesRepository from '@infrastructure/repositories/Categories.repository'

export class DeleteCategoryUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  execute(id: number): Promise<any> {
    return this.categoriesRepository.delete(id)
  }
}
