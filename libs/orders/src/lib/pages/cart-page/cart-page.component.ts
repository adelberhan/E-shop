import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/order.service';
import { CartItem, CartItemDetails } from '../../models/cart';
import { Subject, takeUntil } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [],
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItemsDetails: CartItemDetails[] = [];
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this._getCartDetails();
    this.getScreenWidth = window.innerWidth;

  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetails) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  private _getCartDetails() {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((respCart) => {
        this.cartItemsDetails = [];
        this.cartCount = respCart?.items.length ?? 0;
        respCart.items.forEach((cartItem) => {
          if (cartItem.productId) {
            this.ordersService
              .getProduct(cartItem.productId)
              .subscribe((respProduct) => {
                this.cartItemsDetails.push({
                  product: respProduct,
                  quantity: cartItem.quantity,
                });
              });
          }
        });
      });
  }
  // updateCartItemQuantity(event, cartItem: CartItemDetails) {
  //   this.cartService.setCartItem(
  //     {
  //       productId: cartItem.product.id,
  //       quantity: event.value,
  //     },
  //     true
  //   );
  // }

  updateCartItemQuantity(event, cartItem: CartItemDetails) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
  }
  public getScreenWidth: any;



  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
