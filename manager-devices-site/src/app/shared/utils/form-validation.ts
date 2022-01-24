import { FormControl } from '@angular/forms';

export class FormValidations {
  static preventNumberNegative(control: FormControl) {
    const number = Number(control.value);

    return number < 0 ? { numberPositive: false } : null;
  }

  static getErrorMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config: any = {
      required: `${fieldName} is required.`,
      maxlength: `${fieldName} must be longer than ${validatorValue?.requiredLength} characters.`,
      numberPositive: `${fieldName} must be positive.`,
    };

    return config[validatorName];
  }
}
