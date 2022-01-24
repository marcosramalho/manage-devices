import { Category } from '../../entities/category.entity'

export default interface IDeviceDto {
  id: number
  color: string
  category: Category
  categoryId: number
  partNumber: number
  createdAt?: string
}
