import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  dieCounter: number = 0;
  path: string = '';

  addCounter() {
    this.dieCounter += 1;
  }
}
