import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '@ng-shop/cart';
import { CartItem } from 'libs/orders/src/lib/models/cart';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(private cartService: CartService) {}

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
  }
}
