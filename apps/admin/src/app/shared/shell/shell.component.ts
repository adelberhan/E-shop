import { Component } from '@angular/core';

@Component({
  selector: 'admin-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
