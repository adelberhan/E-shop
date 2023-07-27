import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersService } from '../../../../../../libs/users/src/lib/services/user.service';
import { User } from '../../../../../../libs/users/src/lib/modules/user';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  user: User[] = [];
  constructor(
    private confirmationService: ConfirmationService,
    private usersService: UsersService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this._getUsers();
  }

  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete the user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).subscribe(
          () => {
            this._getUsers();
            this.messageService.add({
              severity: 'success',
              summary: 'Service Message',
              detail: 'User is deleted?',
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User is not deleted',
            });
          }
        );
      },
    });
  }
  updateUser(userId: string) {
    this.router.navigateByUrl(`user/form/${userId}`);
  }
  getCountryName(countryKey: string) {
    if (countryKey) return this.usersService.getCountry(countryKey);
  }
  private _getUsers() {
    this.usersService.getUsers().subscribe((user) => {
      this.user = user;
    });
  }
}
