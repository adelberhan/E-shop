import { Component, OnInit } from '@angular/core';
import { CartService } from '@ng-shop/cart';

@Component({
  selector: 'order-cart-icon',
  templateUrl: './cart-icon.component.html',
  styles: [],
})
export class CartIconComponent implements OnInit {
  cartCount: number = 0;
  cartStr: string;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    // * the chartCount at this point work after refresh the page
    // * so we gonging to obsessive it to make it se the value that
    // * save in the internal storage without reloading the page
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items.length ?? 0;
      
    });

    // this.cartCount = this.cartService.getCart().items?.length;
    // this.cartStr = JSON.stringify(this.cartCount);
    // console.log(this.cartStr);
  }
}
