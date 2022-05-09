import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'IPME Zuper Projekt';

  array: string[] = ['Emmanuel', 'Wendy', 'Salsabil', 'Florian'];
  array_2: Array<string> = new Array<string>();
  clicked: boolean = false;

  getZuperTitle(line: number = 10): string {
    return 'Zuper title mais de la fonction ' + line;
  }

  changeTitle(): void {
    this.clicked = true;
  }
}
