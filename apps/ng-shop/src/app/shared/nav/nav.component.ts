import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-shop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() linkClick = new EventEmitter<void>();

  onLinkClick(): void {
    this.linkClick.emit();
  }
}
