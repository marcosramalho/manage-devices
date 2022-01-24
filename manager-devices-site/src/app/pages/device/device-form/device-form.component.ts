import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { DeviceService } from './../shared/device.service';
import { Device } from '../shared/device.model';
import { Category } from '../../categories/shared/categories.model';
import { CategoriesService } from './../../categories/shared/categories.service';
import { FormValidations } from 'src/app/shared/utils/form-validation';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss'],
})
export class DeviceFormComponent implements OnInit, AfterContentChecked {
  public pageTitle = 'New Device';
  public currentAction = 'new';
  public deviceForm: FormGroup;
  public submittedForm = false;
  public messageServerError: string[] = [];
  public device: Device = new Device();
  public categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService,
    private categoriesService: CategoriesService,
    private toastr: ToastrService
  ) {
    this.deviceForm = this.formBuilder.group({
      id: new FormControl(''),
      categoryId: new FormControl('', [Validators.required]),
      partNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
        FormValidations.preventNumberNegative,
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.maxLength(16),
      ]),
    });
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.loadDevice();
    this.loadCategories();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  public async submitForm() {
    this.submittedForm = true;

    this.currentAction === 'new' ? this.saveDevice() : this.updateDevice();
  }

  public applyCss(field: string) {
    return {
      'is-invalid': this.verifyValidTouched(field),
    };
  }

  private verifyValidTouched(field: string): boolean {
    return (
      (!this.deviceForm.get(field)?.valid &&
        this.deviceForm.get(field)?.touched) ??
      false
    );
  }

  private setCurrentAction() {
    this.currentAction =
      this.route.snapshot.url[0].path === 'new' ? 'new' : 'edit';
  }

  private loadDevice() {
    if (this.currentAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap((params) =>
            this.deviceService.getById(Number(params.get('id')))
          )
        )
        .subscribe(
          (device) => {
            this.device = device;
            this.deviceForm.patchValue(this.device);
          },
          (error) => this.toastr.error('Error to load device')
        );
    }
  }

  private setPageTitle() {
    this.pageTitle =
      this.currentAction === 'new'
        ? 'New Device'
        : `Edit Device ${this.device.id ?? ''}`;
  }

  private saveDevice() {
    const device = Object.assign(new Device(), this.deviceForm.value);

    this.deviceService.save(device).subscribe(
      (device) => this.actionsForSuccess(device),
      (error) => this.actionsError(error)
    );
  }

  private updateDevice() {
    const device = Object.assign(new Device(), this.deviceForm.value);

    this.deviceService.update(device).subscribe(
      (device) => this.actionsForSuccess(device),
      (error) => this.actionsError(error)
    );
  }

  private actionsForSuccess(device: Device) {
    this.toastr.success('Save succesfully!', 'Save succesfully!');

    // reload component
    this.router
      .navigateByUrl('/dashboard/devices', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/dashboard/devices', device.id, 'edit'])
      );
  }

  private actionsError(error: any) {
    this.toastr.error(`Unexpected error`);
    this.submittedForm = false;

    this.messageServerError =
      error.status === 422
        ? JSON.parse(error._body).errors
        : ['Error to process request. Please, try later again!'];
  }

  private loadCategories() {
    this.categoriesService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (error) => console.error('Error to load categories')
    );
  }
}
