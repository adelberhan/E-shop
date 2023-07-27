import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../../libs/users/src/lib/services/user.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private usersService:UsersService) { }
  ngOnInit(): void {
      
  }
  logOut() {
  this.usersService.logOut()
}
}
