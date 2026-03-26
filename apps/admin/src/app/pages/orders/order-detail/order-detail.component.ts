import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'libs/orders/src/lib/models/order';
import { OrdersService } from 'libs/orders/src/lib/services/order.service';
import { ORDER_STATUS } from '@ng-shop/status';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'ng-shop-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  order: Order
  endSubs$: Subject<any> = new Subject();
  orderStatus = [];
  selectedStatus: any;

  constructor(
    private orderServices: OrdersService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }
  ngOnDestroy() {
    this.endSubs$.complete();
  }
  _mapOrderStatus() {
    Object.keys(ORDER_STATUS);

    this.orderStatus = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].label,
      };
    });
  }

  get currentStatusLabel(): string {
    if (this.selectedStatus === null || this.selectedStatus === undefined) {
      return '';
    }

    return ORDER_STATUS[this.selectedStatus]?.label || 'Unknown';
  }

orderStatusChange(event) {
  const newStatus = event.value;

  this.orderServices
    .updateOrder({ status: newStatus }, this.order.id)
    .pipe(takeUntil(this.endSubs$))
    .subscribe({
      next: (order) => {
        this.selectedStatus = newStatus;

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Order status changed successfully to ${this.currentStatusLabel}.`,
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Order status could not be changed.',
        });
      },
    });
}

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.orderServices
          .getOrder(params.id)
          .pipe(takeUntil(this.endSubs$))
          .subscribe((order) => {
            this.order = order;
            this.selectedStatus = order.status;
            console.log(order.orderItems)
          });
      }
    });
  }
}
