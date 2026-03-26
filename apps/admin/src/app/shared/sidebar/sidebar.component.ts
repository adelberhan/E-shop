import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../../../../libs/users/src/lib/services/user.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() isOpen = false;
  @Output() sidebarClose = new EventEmitter<void>();

  constructor(private usersService:UsersService) { }
  ngOnInit(): void {
      
  }

  closeSidebar() {
    this.sidebarClose.emit();
  }

  logOut() {
  this.usersService.logOut()
  this.closeSidebar();
}
}
