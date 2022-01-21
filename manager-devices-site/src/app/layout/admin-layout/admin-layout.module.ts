import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminSideNavComponent } from './ui/admin-side-nav/admin-side-nav.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSideNavComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
