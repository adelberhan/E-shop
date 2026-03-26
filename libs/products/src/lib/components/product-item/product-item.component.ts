import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '@ng-shop/cart';
import { CartItem } from 'libs/orders/src/lib/models/cart';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    if (!this.product) {
      console.warn('ProductItemComponent initialized without product input');
    }
  }

  addProductToCart() {
    if (!this.product?.id) return;

    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };

    // Pass false to add quantity, true to overwrite quantity
    this.cartService.setCartItem(cartItem, false);
    this.messageService.add({
      severity: 'success',
      summary: this.translateService.instant('messages.cartAddedTitle'),
      detail: this.translateService.instant('messages.cartAddedDetail'),
    });
  }
}
