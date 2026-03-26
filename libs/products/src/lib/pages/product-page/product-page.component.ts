import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Subject, takeUntil } from 'rxjs';
import { CartItem } from '../../../../../orders/src/lib/models/cart';
import { CartService } from '../../../../../orders/src/lib/services/cart.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  productId: string;
  product: Product;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
      // params.categoryId ? this._getProduct(params.productId) :
      if (this.productId) {
        this._getProduct(this.productId);
      }
    });
  }

  addToCart() {
    const cartItem: CartItem = {
      productId: this.productId,
      quantity: this.quantity,
    };
    this.cartService.setCartItem(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: this.translateService.instant('messages.cartAddedTitle'),
      detail: this.translateService.instant('messages.cartAddedDetail'),
    });
  }

  private _getProduct(id: string) {
    this.productsService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((resProduct) => {
        this.product = resProduct.product;
      });
  }

  ngOnDestroy(): void {
    this.endSubs$.next(void 0);
    this.endSubs$.complete();
  }
}
