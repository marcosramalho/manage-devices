import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { InputFieldErrorComponent } from './components/input-field-error/input-field-error.component';
@NgModule({
  declarations: [InputFieldErrorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputFieldErrorComponent,
  ],
})
export class SharedModule {}
