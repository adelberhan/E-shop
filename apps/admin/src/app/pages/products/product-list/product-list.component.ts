import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../../../../libs/products/src/lib/models/product';
import { ProductsService } from '../../../../../../../libs/products/src/lib/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._getProduct();
  }
  ngOnDestroy() {
    this.endSubs$.complete();
  }
  private _getProduct() {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((product) => {
        this.products = product;
      });
  }
  updateProduct(productId: string) {
    this.router.navigateByUrl(`product/form/${productId}`);
  }

  deleteProduct(productId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete the Product?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService
          .deleteProduct(productId)
          .pipe(takeUntil(this.endSubs$))
          .subscribe(
            () => {
              this._getProduct();
              this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Product is deleted?',
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Product is not deleted',
              });
            }
          );
      },
    });
  }
}
