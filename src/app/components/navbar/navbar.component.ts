import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
}
