import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styles: [],
})
export class BannerComponent {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  get isRtl(): boolean {
    return this.document.documentElement.dir === 'rtl';
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
