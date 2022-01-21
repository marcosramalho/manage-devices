import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/categories.model';
import { Device } from './pages/device/shared/device.model';

export class InMemoryDatabase extends InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {
        id: 1,
        name: 'Monitors',
      },
      {
        id: 2,
        name: 'Desktop',
      },
      {
        id: 3,
        name: 'Tablet',
      },
      {
        id: 4,
        name: 'Smartphone',
      },
    ];

    const devices: Device[] = [
      {
        id: 1,
        partNumber: 1,
        color: '#333',
        categoryId: categories[0].id,
      },
      {
        id: 2,
        partNumber: 2,
        color: '#000',
        categoryId: categories[2].id,
      },
      {
        id: 3,
        partNumber: 3,
        color: '#f3f',
        categoryId: categories[1].id,
      },
      {
        id: 4,
        partNumber: 4,
        color: '#eec',
        categoryId: categories[3].id,
      },
    ];

    return { categories, devices };
  }
}
