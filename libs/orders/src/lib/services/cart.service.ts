import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());
  // BehaviorSubject we use it here because the the subject execution is after the constrictor
  // So the BehaviorSubject can execution any time i want him to be executed with mentioned
  // the function that will be executed whit it.

  constructor() {}

  initCartLocalStorage() {
    const cart: Cart = this.getCart();

    if (!cart) {
      const initCart = {
        items: [] as string[],
      };
      const initCartJson = JSON.stringify(initCart);
      localStorage.setItem(CART_KEY, initCartJson);
    } else {
      this.cart$.next(cart);
    }
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem(CART_KEY);
    const cart: Cart = JSON.parse(cartJsonString);
    
    return cart;
  }

  setCartItem(cartItem: CartItem, updateCartItem?: boolean): Cart {
    const cart = this.getCart();
    const cartItemExist = cart.items.find(
      (item) => item.productId === cartItem.productId
    );
    if (cartItemExist) {
      cart.items.map((item) => {
       
        if (item.productId === cartItem.productId) {
          if (updateCartItem) {
            item.quantity = cartItem.quantity;
          } else {
            item.quantity = item.quantity + cartItem.quantity;
          }

          return item;
        }
      });
    } else {
      cart.items.push(cartItem);
    }

    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJson);
    this.cart$.next(cart);
    return cart;
  }

  emptyCart() {
    const intialCart = {
      items: [],
    };
    const intialCartJson = JSON.stringify(intialCart);
    localStorage.setItem(CART_KEY, intialCartJson);
    this.cart$.next(intialCart);
  }

  deleteCartItem(productId: string) {
    const cart = this.getCart();
    const newCart = cart.items.filter((item) => item.productId !== productId);
    cart.items = newCart;

    const cartJsonString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJsonString);
    this.cart$.next(cart);
  }
}
