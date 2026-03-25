import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: Category[] = [];
  categoryId: string[];
  isCategoryPage: boolean;
  isCategoriesOpen = true;

  endSubs$: Subject<any> = new Subject();
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.categoryId
          ? this._getProducts(this.categoryId)
        : this._getProducts();
      this.categoryId
        ? (this.isCategoryPage = true)
        : (this.isCategoryPage = false);
    });
    this._getCategories();
  }

  ngOnDestroy(): void {
    this.endSubs$.next(void 0);
    this.endSubs$.complete();
  }

  private _getProducts(categoriesFilter?: string[]) {
    this.productsService
      .getProducts(categoriesFilter)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((products) => {
        this.products = products;
      });
  }
  private _getCategories() {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((category) => {
        this.categories = category;
      });
  }

  categoryFilter() {
    const selectedCategories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.id);

    this._getProducts(selectedCategories);
  }

  toggleCategories() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  getCategoryLabel(categoryName: any): string {
    const normalizedCategoryName =
      typeof categoryName === 'string' ? categoryName.trim() : '';

    if (!normalizedCategoryName) {
      return '';
    }

    const translationKey = `categoryNames.${this.normalizeCategoryKey(
      normalizedCategoryName
    )}`;
    const translatedValue = this.translateService.instant(translationKey);

    return translatedValue === translationKey
      ? normalizedCategoryName
      : translatedValue;
  }

  private normalizeCategoryKey(categoryName: string): string {
    return categoryName
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }
}
