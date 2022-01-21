import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceFormComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule
  ]
})
export class DeviceModule { }
