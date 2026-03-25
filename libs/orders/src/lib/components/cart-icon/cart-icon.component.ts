import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartService } from '@ng-shop/cart';

@Component({
  selector: 'order-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  cartCount = 0;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((cart) => {
        this.cartCount =
          cart?.items?.reduce((total, item) => total + (item.quantity ?? 0), 0) ??
          0;
        this.cdr.markForCheck();
      });
  }
}
