import { Component, HostListener, OnInit } from '@angular/core';
import { User } from '@ng-shop/users';

@Component({
  selector: 'ng-shop-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  user: User;

  public getScreenWidth: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
