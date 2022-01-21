import { Injectable } from '@angular/core';
import { Category } from './categories.model';

import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiPath = 'api/categories';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Category[]> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategories));
  }

  public getById(id: number): Observable<Category> {
    const url = `${this.apiPath}/${id}`;

    return this.http
      .get(url)
      .pipe(map(this.jsonDataToCategory), catchError(this.handleError));
  }

  public save(category: Category): Observable<Category> {
    return this.http
      .post(this.apiPath, category)
      .pipe(map(this.jsonDataToCategory), catchError(this.handleError));
  }

  public update(category: Category): Observable<Category> {
    const url = `${this.apiPath}/${category.id}`;

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    );
  }

  public delete(id: number): Observable<boolean> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => true)
    );
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach((element) => categories.push(element as Category));

    return categories;
  }

  private handleError(error: any): Observable<any> {
    console.error(`Error request --> ${error}`);
    return throwError(error);
  }
}
