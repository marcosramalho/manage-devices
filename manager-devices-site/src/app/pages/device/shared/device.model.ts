import { Category } from '../../categories/shared/categories.model';

export class Device {
  constructor(
    public id?: number,
    public partNumber?: number,
    public color?: string,
    public categoryId?: number,
    public category?: Category
  ) {}
}
