import { getRepository, Repository } from 'typeorm'
import { Category } from '@domain/entities/category.entity'
import ICreateCategoryDTO from '@domain/dtos/categories/ICreateCategory.dto'
import IUpdateCategoryDto from '@domain/dtos/categories/IUpdateCategory.dto'

class CategoriesRepository {
  private ormRepository: Repository<Category>

  constructor() {
    this.ormRepository = getRepository(Category)
  }

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const user = this.ormRepository.create(categoryData)

    await this.ormRepository.save(user)

    return user
  }

  public async findAll(): Promise<Category[]> {
    return this.ormRepository.find()
  }

  public async findById(id: number): Promise<Category | undefined> {
    return this.ormRepository.findOne(id)
  }

  public async update(id: number, categoryData: IUpdateCategoryDto) {
    return this.ormRepository.update(id, categoryData)
  }

  public async delete(id: number) {
    return this.ormRepository.delete(id)
  }
}

export default CategoriesRepository
