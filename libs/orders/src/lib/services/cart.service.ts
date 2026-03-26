import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());
  cartAction$: BehaviorSubject<'init' | 'add' | 'update' | 'delete' | 'clear'> =
    new BehaviorSubject<'init' | 'add' | 'update' | 'delete' | 'clear'>('init');
  // BehaviorSubject we use it here because the the subject execution is after the constrictor
  // So the BehaviorSubject can execution any time i want him to be executed with mentioned
  // the function that will be executed whit it.

  constructor() {}

  initCartLocalStorage() {
    const cart: Cart = this.getCart();

    this.saveCart(cart);
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem(CART_KEY);

    if (!cartJsonString) {
      return {
        items: [],
      };
    }

    try {
      const cart: Cart = JSON.parse(cartJsonString);

      return {
        items: cart?.items ?? [],
      };
    } catch {
      return {
        items: [],
      };
    }
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

    this.saveCart(cart);
    this.cartAction$.next(updateCartItem ? 'update' : 'add');
    return cart;
  }

  emptyCart() {
    const intialCart = {
      items: [],
    };
    this.saveCart(intialCart);
    this.cartAction$.next('clear');
  }

  deleteCartItem(productId: string) {
    const cart = this.getCart();
    const newCart = cart.items.filter((item) => item.productId !== productId);
    cart.items = newCart;

    this.saveCart(cart);
    this.cartAction$.next('delete');
  }

  private saveCart(cart: Cart) {
    const normalizedCart: Cart = {
      items: cart?.items ?? [],
    };
    const cartJson = JSON.stringify(normalizedCart);
    localStorage.setItem(CART_KEY, cartJson);
    this.cart$.next(normalizedCart);
  }
}
