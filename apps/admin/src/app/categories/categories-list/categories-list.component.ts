import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoriesService } from '@ng-shop/products';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getCategories();
  }
  ngOnDestroy() {
    this.endSubs$.complete();
  }
  deleteCategory(CategoryId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete the category?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService
          .deleteCategory(CategoryId)
          .pipe(takeUntil(this.endSubs$))
          .subscribe(
            () => {
              this._getCategories();
              this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Category is deleted?',
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Category is not deleted',
              });
            }
          );
      },
    });
  }

  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`categories/form/${categoryId}`);
  }
  private _getCategories() {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((cats) => {
        this.categories = cats;
      });
  }
}
