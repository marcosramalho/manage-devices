import { getRepository, Repository } from 'typeorm'
import { Category } from '../../domain/entities/category.entity'
import ICreateCategoryDTO from '../../domain/dtos/categories/ICreateCategory.dto'

class CategoriesRepository {
  private ormRepository: Repository<Category>

  constructor() {
    this.ormRepository = getRepository(Category)
  }

  public async create(userData: ICreateCategoryDTO): Promise<Category> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }
}

export default CategoriesRepository
