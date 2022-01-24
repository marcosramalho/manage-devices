import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { FormValidations } from '../../utils/form-validation';

@Component({
  selector: 'app-input-field-error',
  templateUrl: './input-field-error.component.html',
  styleUrls: ['./input-field-error.component.scss'],
})
export class InputFieldErrorComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label = '';

  constructor() {}

  ngOnInit(): void {}

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMsg(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
  }
}
