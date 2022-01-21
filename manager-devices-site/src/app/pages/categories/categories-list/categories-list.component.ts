import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/categories.model';
import { CategoriesService } from './../shared/categories.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  public delete(categoryId: number) {
    const mustDelete = confirm(
      'Are you sure you want to delete this category?'
    );

    if (mustDelete) {
      this.categoriesService.delete(categoryId).subscribe(
        () =>
          (this.categories = this.categories.filter(
            (element) => element.id !== categoryId
          )),
        () => console.error(`Error to delete`)
      );
    }
  }

  private loadAll() {
    this.categoriesService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (error) => console.error(`Error to load data`)
    );
  }
}
