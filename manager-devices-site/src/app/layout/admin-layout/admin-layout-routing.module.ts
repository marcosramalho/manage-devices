import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'devices',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/device/device.module').then(
            (m) => m.DeviceModule
          ),
      },
    ],
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
