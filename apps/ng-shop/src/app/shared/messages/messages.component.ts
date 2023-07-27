import { Component, OnInit } from '@angular/core';
import { CartService } from '@ng-shop/cart';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ng-shop-messages',
  templateUrl: './messages.component.html',
  styles: [],
})
export class MessagesComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {
    this.cartService.cart$.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product added to cart',
      });
    });
  }
  ngOnInit(): void {}
}
