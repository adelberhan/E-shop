import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from '@env/environment';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';
import { StripeService } from 'ngx-stripe';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiURLOrders = environment.apiUrl + 'orders';
  apiURLProducts = environment.apiUrl + 'products';

  constructor(private http: HttpClient, private stripeService: StripeService) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURLOrders);
  }

  getOrder(OrderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiURLOrders}/${OrderId}`);
  }

  createOrder(Order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURLOrders, Order);
  }

  updateOrder(
    orderStatus: { status: string },
    orderId: string
  ): Observable<Order> {
    return this.http.put<Order>(`${this.apiURLOrders}/${orderId}`, orderStatus);
  }

  deleteOrder(OrderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLOrders}/${OrderId}`);
  }

  getProduct(ProductId: string): Observable<any> {
    return this.http.get<any>(`${this.apiURLProducts}/${ProductId}`);
  }

  createCheckOutSession(orderItem: OrderItem[]) {
    return this.http
      .post<{ id: string }>(
        `${this.apiURLOrders}/create-checkout-session`,
        orderItem
      )
      .pipe(
        switchMap((session: { id: string }) => {
          return this.stripeService.redirectToCheckout({
            sessionId: session.id,
          });
        })
      );
  }

  cashOrderData(order: Order) {
    localStorage.setItem('orderItems', JSON.stringify(order));
  }
  getCashedOrderData():Order {
   return JSON.parse(localStorage.getItem('orderItems'));
  }

  removeCashedOrderData(){
    localStorage.removeItem('orderItems')
  }
}
