import { DeviceListComponent } from './device-list/device-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceFormComponent } from './device-form/device-form.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceListComponent,
  },
  {
    path: 'new',
    component: DeviceFormComponent,
  },
  {
    path: ':id/edit',
    component: DeviceFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {}
