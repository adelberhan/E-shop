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
    this.cartService.cartAction$.subscribe((action) => {
      if (action !== 'add') {
        return;
      }

      const isArabic = document.documentElement.lang === 'ar';

      this.messageService.add({
        severity: 'success',
        summary: isArabic ? '\u062a\u0645' : 'Success',
        detail: isArabic
          ? '\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062a\u062c \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629'
          : 'Product added to cart',
      });
    });
  }
  ngOnInit(): void {}
}
