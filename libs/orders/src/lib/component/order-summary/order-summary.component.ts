import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@ng-shop/cart';
import { OrdersService } from '../../services/order.service';
import { Subject, take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart';

@Component({
  selector: 'ng-shop-order-summary',
  templateUrl: './order-summary.component.html',
  styles: [],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  totalPrice = 0;
  endSubs$: Subject<any> = new Subject();
  isCheckout = false;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.router.url.includes('checkout')
      ? (this.isCheckout = true)
      : (this.isCheckout = false);
  }

  ngOnInit(): void {
    this._getOrderSummary();
  }
  ngOnDestroy(): void {
    this.endSubs$.complete();
  }

  private _getOrderSummary() {
    this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items.map((item) => {
          if (item.productId) {
            this.ordersService
              .getProduct(item?.productId)
              .subscribe((product) => {
                this.totalPrice += product.product.price * item.quantity;
              });
          }
        });
      }
    });
  }
  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
