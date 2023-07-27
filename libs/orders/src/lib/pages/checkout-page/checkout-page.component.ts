import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '@ng-shop/cart';
import { User, UsersService } from '@ng-shop/users';
import { OrdersService } from '../../services/order.service';
import { OrderItem } from '../../models/order-item';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';
import * as countries from 'i18n-iso-countries';
import { Subject, take, takeUntil } from 'rxjs';

declare const require;

@Component({
  selector: 'ng-shop-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: [],
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private ordersService: OrdersService,
  ) {}
  checkoutFormGroup: FormGroup;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  userId: string;
  country = [];
  unsubscribe$: Subject<any> = new Subject<void>();

  ngOnInit(): void {
    this._initCheckoutForm();
    this._autoFillUserData();
    this._getCaretItems();
    this._getCountries();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  bacToCart() {
    this.router.navigate(['/cart']);
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  private _autoFillUserData() {
    this.usersService
      .observeCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user:User) => {
        if (user) {
          this.userId = user.id;
          this.checkoutForm.name.setValue(user.name);
          this.checkoutForm.email.setValue(user.email);
          this.checkoutForm.phone.setValue(user.phone);
          this.checkoutForm.city.setValue(user.city);
          this.checkoutForm.street.setValue(user.street);
          this.checkoutForm.country.setValue(user.country);
          this.checkoutForm.zip.setValue(user.zip);
          this.checkoutForm.apartment.setValue(user.apartment);
        }
        console.log(user)
      });
  }

  private _getCaretItems() {
    const cart: Cart = this.cartService.getCart();
    this.orderItems = cart.items.map((item) => {
      if (item.productId != undefined) {
        return {
          product: item.productId,
          quantity: item.quantity,
        };
      }
    });
  }

  private _getCountries() {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    this.country = Object.entries(
      countries.getNames('en', { select: 'official' })
    ).map((entry) => {
      return {
        id: entry[0],
        name: entry[1],
      };
    });
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

   
    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm.street.value,
      shippingAddress2: this.checkoutForm.apartment.value,
      city: this.checkoutForm.city.value,
      zip: this.checkoutForm.zip.value,
      country: this.checkoutForm.country.value,
      phone: this.checkoutForm.phone.value,
      status: 0,
      user: this.userId,
      dateOrdered: `${Date.now()}`,
    };

    this.ordersService.cashOrderData(order);

    this.ordersService.createCheckOutSession(this.orderItems).subscribe(error=>{
      if(error){
        console.log("error in redirect")
      }
    })

  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }
}
