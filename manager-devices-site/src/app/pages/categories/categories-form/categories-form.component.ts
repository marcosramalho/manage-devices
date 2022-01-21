import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { CategoriesService } from './../shared/categories.service';
import { Category } from '../shared/categories.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit, AfterContentChecked {
  public pageTitle = 'New Category';
  public currentAction = 'new';
  public categoryForm: FormGroup;
  public submittedForm = false;
  public messageServerError: string[] = [];
  public category: Category = new Category();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private toastr: ToastrService
  ) {
    this.categoryForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(128),
      ]),
    });
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.loadCategory();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  public async submitForm() {
    this.submittedForm = true;

    this.currentAction === 'new' ? this.saveCategory() : this.updateCategory();
  }

  public applyCss(field: string) {
    return {
      'is-invalid': this.verifyValidTouched(field),
    };
  }

  private verifyValidTouched(field: string): boolean {
    return (
      (!this.categoryForm.get(field)?.valid &&
        this.categoryForm.get(field)?.touched) ??
      false
    );
  }

  private setCurrentAction() {
    this.currentAction =
      this.route.snapshot.url[0].path === 'new' ? 'new' : 'edit';
  }

  private loadCategory() {
    if (this.currentAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap((params) =>
            this.categoriesService.getById(Number(params.get('id')))
          )
        )
        .subscribe(
          (category) => {
            this.category = category;
            this.categoryForm.patchValue(this.category);
          },
          (error) => this.toastr.error('Error to load category')
        );
    }
  }

  private setPageTitle() {
    this.pageTitle =
      this.currentAction === 'new'
        ? 'New Category'
        : `Edit Category ${this.category.name ?? ''}`;
  }

  private saveCategory() {
    const category = Object.assign(new Category(), this.categoryForm.value);

    this.categoriesService.save(category).subscribe(
      (category) => this.actionsForSuccess(category),
      (error) => this.actionsError(error)
    );
  }

  private updateCategory() {
    const category = Object.assign(new Category(), this.categoryForm.value);

    this.categoriesService.update(category).subscribe(
      (category) => this.actionsForSuccess(category),
      (error) => this.actionsError(error)
    );
  }

  private actionsForSuccess(category: Category) {
    this.toastr.success('Save succesfully!', 'Save succesfully!');

    // reload component
    this.router
      .navigateByUrl('/dashboard/categories', { skipLocationChange: true })
      .then(() => this.router.navigate(['/dashboard/categories', 1, 'edit']));
  }

  private actionsError(error: any) {
    this.toastr.error(`Unexpected error`);
    this.submittedForm = false;

    this.messageServerError =
      error.status === 422
        ? JSON.parse(error._body).errors
        : ['Error to process request. Please, try later again!'];
  }
}
